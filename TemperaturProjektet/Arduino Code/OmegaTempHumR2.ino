
#include <ESP8266WiFi.h>  
#include "FirebaseESP8266.h"
#include <NTPClient.h>
#include <WiFiUdp.h>

#define FIREBASE_HOST "https://skogens-thm-default-rtdb.europe-west1.firebasedatabase.app/"
#define FIREBASE_AUTH "AIzaSyC1Z3eWF5XuyBvX8XPetVs76hy5osSA6KM" 
#define WIFI_SSID "ABBgym_2.4" 
#define WIFI_PASSWORD "mittwifiarsabra"

FirebaseData FirebaseData1;

#include <Wire.h>
#include <AM2320.h>

AM2320 sensor;

float SensorTemp;
float SensorHum;
String TTH;
float EpochHOUR;
float EpochUSE;
float EpochSEC;

WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");

void setup() {
  Serial.begin(9600);
  Wire.begin(14,12);
  
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD); 
  Serial.print("connecting"); 
  while (WiFi.status() != WL_CONNECTED) { 
   Serial.print("."); 
   delay(500); 
 }
   Serial.println(); 
   Serial.print("connected: "); 
   Serial.println(WiFi.localIP());  
   Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);  
  delay(5000);
}




void getTempHum(){
  if (sensor.measure()){
  SensorTemp = sensor.getTemperature();
  Serial.print("Temperature: ");
  Serial.println(SensorTemp);

  SensorHum = sensor.getHumidity();
  Serial.print("Humidity: ");
  Serial.println(SensorHum);
  }
  
  else {
  int errorCode = sensor.getErrorCode();
  switch (errorCode) {
    case 1: Serial.println("ERR: SENSOR IS OFFLINE"); break;
    case 2: Serial.println("ERR: CRC VALIDATION FAILED."); break;
      }
    }
  }


void loop() {
   timeClient.update();
   timeClient.begin();
   time_t epochtime = timeClient.getEpochTime();
   EpochHOUR = int(epochtime) % 86400;
   EpochSEC = int(EpochHOUR) % 60;
   EpochUSE = EpochHOUR - EpochSEC;


   if (int(EpochUSE) % 60 == 0) {
         getTempHum();
       Serial.print("Time: ");
       Serial.println(EpochUSE);
    TTH = String(EpochUSE) + " - " + String(SensorTemp) + " - " + String(SensorHum);
    Firebase.pushString(FirebaseData1,"/Rum2/Historik/",TTH);
    delay(1000);
    Firebase.setString(FirebaseData1,"/Rum2/Current_TTH/",TTH);
    delay(59000);
   }

}
