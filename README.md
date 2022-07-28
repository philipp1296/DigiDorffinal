# DigiDorffinal

In diesem Projekt wird ein reales Problem aus dem Bereich mGovernment mit dem Einsatz von Software-Engineering und Projektmanagement gelöst. Hierbei wird eine prototypische Lösung in Form einer App entwickelt. 
Die App soll die Kommunikation und Verbindung zwischen den Menschen in einem Dorf verbessern. Hierbei sollen lokale Veranstaltungen, Informationen und Angebote unkompliziert und schnell digital verbreitet, aber auch gesucht werden können. 

# Installation
Installationsanleitung:

Um die App starten zu können sind einige Schritte und Installationen notwendig, da die Datei sonst für GitHUB zu groß gewesen wäre.

1. Visual Studio Code installieren, auf dem Handy die App "Expo Go" installieren.
2. Expo installieren: Hierfür VS öffnen und im Terminal "npm i -g expo-cli" eingeben.
3. Das Projekt anlegen: Hierfür über das Terminal in VS in den gewünschten Ordner navigieren und "expo init DigiDorf" eingeben.
4. Unter folgendem Link die beiden Dateien herunterladen: 
5. Den Ordner Backend in den selben Ordner ziehen, indem das erstellte Projekt liegt.
6. Alle Daten aus dem heruntergeladenen Ordner Frontend in den zuvor erstellten Projektordner DigiDorf ziehen und alles vorhandene ersetzen.
7. Über das Terminal in VS im Projektordner folgende Installationen vornehmen (einzeln installieren):

expo install expo-image-picker <br>
expo install react-native-gesture-handler <br>
npm install -S yup <br>
npm install formik --save <br>
navigation: <br>
	npm install @react-navigation/native <br>
	expo install react-native-screens react-native-safe-area-context <br>
	npm install @react-navigation/native-stack <br>
npm install @react-navigation/bottom-tabs <br>
npm i apisauce --save <br>
npm install react-native-progress --save <br>
expo install react-native-svg <br>
npm i jwt-decode <br>
npm install react-native-secure-storage --save <br>

8. Anschließend sowohl den Backend-Ordner als auch den DigiDorf-Ordner in einem spereraten VS Fenster öffnen.
9. Das Backend und das DigiDorf via "npm start" starten.
10. Den QR-Code mit der Handykamera scannen und über expo starten klicken.
11. Die App Nutzen

Zugangsdaten:
email: Willi.wedel@web.de
pw: 12345

email: ffw@web.de
pw: 12345

Oder selbst registrieren!

Hinweis: Die Fehlermeldung beim ersten anklicken eines Angebotes kann ignoriert werden. (hat nichts mit dem Programmcode zu tun sondern mit der Performance zur Datenbank)
	Warning: Can't perform a React state update on an unmounted component.
