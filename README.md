# Meetup App - A step by step guide for dummies!

- Förord innan vi går igenom ordenligt!
	- Projektet är uppdelat i två kategorier, en **client** mapp och en **api** mapp.
	- Clientside använder vi **Vue** och i backend använder vi **node** och **express**

- LEVELUPS använda:

	```
	 API/databas
	```
	```
	 Acceptanstester
	```

# To the clouds!

- Jag hade hade valet att använda vilket molntjänst som helst att hysa mitt projekt. I detta fall använde jag Heroku.
	- I både mapp **client** och **api** skapas en **Dockerfile** med de scripts och kommandon nödvändiga för att allt ska rulla på bra.
	- Innuti **ROOT** finner vi en **docker-compose.yml** fil som har i uppgift att skapa en avbild/container av både **api** och **client** och sedan kör dem.
	- Härnäst körs både **client** och **api** med kommandot: *docker-compose up --build* som bygger både containers och kör igång applikationen.
	- Loggar in på heroku med kommandot: *heroku container:login*.
	- Skapar en heroku applikation där min lokala applikation pushas till, *heroku create <APP-NAME>*.
  	- Skapar en tagg till för min avbild och *docker tag <imageName> registry.heroku.com/<APP-NAME>/web*.
  	- Pushar min avbild till heroku med kommandot: *docker push registry.heroku.com/<APP-NAME>/web*.
  	- Kör en release till heroku med kommandot: *heroku container:release web*.
  	- Öppnar upp appen i webbläsaren med kommandot: *heroku open*.

# Cleanup in isle three

- Då projektet nu har en länk till molntjänstet heroku är det dags att städa lite!
	- Började med att i **client** mappen rensa allt som **Vue** hade för installerat:
		- example.spec.js innuti tests/unit mappen
		- HelloWorld.vue  innuti components mappen
		- All styling i App.vue i client
		- All styling i Home innuti Views mappen


# Testers paradise

- Nu börjar vi på riktigt!, utan att gå inte på för mycket detalijer så testade jag mest efter en användares perspektiv. 

- Alltså **hur** och **vad** en användare interagerar med på applikationen.
	- Det var viktigt för mig att definera tidigt vad jag tyckte var värt att testa och vad som var inte.
	- statiska element som Bilder och text om det inte skulle göra något än att vara där skulle inte testas.
	- Knappar, textfält, navbar och "kort" var saker som var prioriterade över annat.

- Test som hade backend element var också interessanta om något mer.
	- *IN_PROGRESS*

# What you see is what you get!

- Det är dags för Frontend!, Denna stycke är in progress just nu och slutförs när designen på appen är klart

```
I. AM. A. ROBOT. FROM. THE. FUTURE.
I. AM. HERE. TO. TAKE. AMERICAN. JOBS!.
```


# Project first time startup and general running of project

- Beep Boop Son, Beep Boop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
