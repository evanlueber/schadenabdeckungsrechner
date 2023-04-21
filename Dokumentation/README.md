# Versicherungsrechner
## Beauftragter
Evan Lüber
## Autraggeber
- Kantonsschule Büelrain Winterthur auf Bitte der BBW
- Berufsbildung Winterthur im Rahmen eines Moduls
## Beschreibung
Diese Applikation stellt einen Schadenabdeckungsrechner dar. Er kann mit Hilfe der Angaben des Benutzers, welche Versicherungssumme, Versicherungswert und der verursachten Schaden sind, berechnen wieviel Prozent und wieviel Franken die Versicherung der Person übernehmen wird. Er wurde im Rahmen eines Programmiermoduls der BBW am Freitag Nachmittag programmiert. In dem Schritt, indem der Versicherungswert angegeben werden muss, habe ich ein PopUp Fenster erstellt, dass man hervorrufen kann. In diesem kann man seine Gegenstände mit ihrem aktuellen Wert, die man momentan besitzt, eintragen, falls man nicht genau weiss, was sein aktueller Versicherungswert ist.
## Planung
Es gibt einen Plan, in dem verschiedene Ideen eingetragen wurden die ich hatte. Ich habe sie je nach Fortschritt unter den entsprechenden Überschriften eingetragen. Ich habe die Ideen im Verlauf des Projekts kaum noch verschoben sondern nur noch abgehakt, wenn ich sie umgesetzt hatte.
## Aufbau
Das Programm enthält vier Schritte durch die man sich durchdrücken kann, jedoch in drei von vier Schritten eine Angabe machen kann. Dies wurde mit einer Route entworfen. Ich habe vier Schritte gemacht, in denen sich je ein neuer Inhalt auf der Seite blicken lässt. Somit konnte ich umgehen, mehrere Seiten amchen zu müssen. 
## Ausführen
### Voraussetzungen
- node installiert
- docker installiert
### Local
- npm install
- npm start
### Docker
- docker build -t [Repository Name]:[Tag] .
- docker run -d -p 3000:3000 [Repository Name]:[Tag]


