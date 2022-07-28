# DigiDorffinal
Installationsanleitung:

Um die App starten zu können sind einige Schritte und Installationen notwendig, da die Datei sonst für GitHUB zu groß gewesen wäre.

1. Visual Studio Code installieren, auf dem Handy die App "Expo Go" installieren.
2. Expo installieren: Hierfür VS öffnen und im Terminal "npm i -g expo-cli" eingeben.
3. Das Projekt anlegen: Hierfür über das Terminal in VS in den gewünschten Ordner navigieren und "expo init DigiDorf" eingeben.
4. Unter folgendem Link die beiden Dateien herunterladen: 
5. Den Ordner Backend in den selben Ordner ziehen, indem das erstellte Projekt liegt.
6. Alle Daten aus dem heruntergeladenen Ordner Frontend in den zuvor erstellten Projektordner DigiDorf ziehen und alles vorhandene ersetzen.
7. Über das Terminal in VS im Projektordner folgende Installationen vornehmen (einzeln installieren):

expo install expo-image-picker
expo install react-native-gesture-handler
npm install -S yup
npm install formik --save
navigation:
	npm install @react-navigation/native
	expo install react-native-screens react-native-safe-area-context
	npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm i apisauce --save
npm install react-native-progress --save
expo install react-native-svg
npm i jwt-decode
npm install react-native-secure-storage --save

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
