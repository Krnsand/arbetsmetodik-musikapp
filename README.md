# Musikapp – Hantering av spellistor

Detta projekt är en enkel webbapplikation skriven i **JavaScript** som låter användaren skapa och visa spellistor. Varje spellista innehåller genre, artist och en lista med låtar.

---

## Funktioner

- Skapa spellistor via ett formulär
- Lista alla spellistor under varandra
- Kategorisering efter genre och artist
- Spara allt i minnet (ingen databas)

---

## Vanliga Git-kommandon

#### Skapa ett nytt lokalt repo

git init

#### Lägg till GitHub som fjärrrepo

git remote add origin https://github.com/DITT-ANVÄNDARNAMN/musik-app.git

#### Skapa och byta gren

git checkout -b development
git checkout -b features

#### Byt tillbaka till main

git checkout main

#### Slå ihop en annan gren in i nuvarande

git merge features

#### Ladda upp gren till GitHub

git push origin development

---

## Konflikthantering

Om två grenar har ändrat samma rader i samma fil uppstår en konflikt. Git markerar dessa automatiskt:

![Conflict](https://github.com/Krnsand/arbetsmetodik-musikapp/blob/development/images/conflict.png)

![Merge-editor](https://github.com/Krnsand/arbetsmetodik-musikapp/blob/development/images/merge-editor.png)

Så här löser du det:

1. Öppna filen som är i konflikt (Git visar vilka).

2. Ta bort markeringarna <<<<<<<, =======, >>>>>>>.

3. Välj vilken kod som ska behållas (eller kombinera).

4. Spara filen och kör:

git add .
git commit -m "Löst konflikt mellan HEAD och features"
