---
path: '/part-10/4-tiedostojen-kasittely'
title: 'Tiedostojen käsittely'
hidden: true
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Kertaat tiedon lukemista tiedostosta.
- Osaat kirjoittaa tiedostoon.

</text-box>

Olemme aiemmin oppineet menetelmiä tekstitiedostojen lukemiseen. Mikäli nämä eivät ole tuoreessa muistissa, kertaa kurssimateriaalin neljäs osa sopivilta osin.

Tarkastellaan seuraavaksi tiedostoon kirjoittamista. Luokka <a href="https://docs.oracle.com/javase/8/docs/api/java/io/PrintWriter.html">PrintWriter</a> tarjoaa toiminnallisuuden tiedostoon kirjoittamiseen. Luokan `PrintWriter` konstruktorille annetaan parametrina kohdetiedoston sijaintia kuvaava merkkijono.


```java
PrintWriter kirjoittaja = new PrintWriter("tiedosto.txt");
kirjoittaja.println("Hei tiedosto!"); // kirjoittaa tiedostoon merkkijonon "Hei tiedosto!" sekä rivinvaihdon
kirjoittaja.println("Lisää tekstiä");
kirjoittaja.print("Ja vielä lisää"); // kirjoittaa tiedostoon merkkijonon "ja vielä lisää" ilman rivinvaihtoa
kirjoittaja.close(); // sulkee tiedoston ja varmistaa että kirjoitettu teksti menee tiedostoon
```

Esimerkissä kirjoitetaan tiedostoon "tiedosto.txt" merkkijono "Hei tiedosto!", jota seuraa rivinvaihto, ja vielä hieman lisää tekstiä. Huomaa että tiedostoon kirjoitettaessa metodi `print` ei lisää rivinvaihtoja, vaan ne tulee lisätä itse. Metodi `println` lisää myös rivinvaihdot.

`PrintWriter`-luokan konstruktori heittää mahdollisesti poikkeuksen, joka tulee joko käsitellä tai siirtää kutsuvan metodin vastuulle. Metodi, jolle annetaan parametrina kirjoitettavan tiedoston nimi ja kirjoitettava sisältö voisi näyttää seuraavalta.


```java
public class Tallentaja {

    public void kirjoitaTiedostoon(String tiedostonNimi, String teksti) throws Exception {
        PrintWriter kirjoittaja = new PrintWriter(tiedostonNimi);
        kirjoittaja.println(teksti);
        kirjoittaja.close();
    }
}
```

Yllä olevassa `kirjoitaTiedostoon`-metodissa luodaan ensin `PrintWriter`-olio, joka kirjoittaa parametrina annetussa sijainnissa sijaitsevaan tiedostoon `tiedostonNimi`. Tämän jälkeen kirjoitetaan tiedostoon `println`-metodilla. Konstruktorin mahdollisesti heittämä poikkeus tulee käsitellä joko `try-catch`-lohkolla tai siirtämällä poikkeuksen käsittelyvastuuta eteenpäin. Metodissa `kirjoitaTiedostoon` käsittelyvastuu on siirretty eteenpäin.

Luodaan `main`-metodi jossa kutsutaan `Tallentaja`-olion `kirjoitaTiedostoon`-metodia. Poikkeusta ei ole pakko käsitellä `main`-metodissakaan, vaan se voi ilmoittaa heittävänsä mahdollisesti poikkeuksen määrittelyllä `throws Exception`.


```java
public static void main(String[] args) throws Exception {
    Tallentaja tallentaja = new Tallentaja();
    tallentaja.kirjoitaTiedostoon("paivakirja.txt", "Rakas päiväkirja, tänään oli kiva päivä.");
}
```

Yllä olevaa metodia kutsuttaessa luodaan tiedosto "paivakirja.txt" johon kirjoitetaan teksti "Rakas päiväkirja, tänään oli kiva päivä.". Jos tiedosto on jo olemassa, pyyhkiytyy vanhan tiedoston sisältö uutta kirjoittaessa.

Mikäli tiedostoja haluaa käsitellä siten, että kirjoitus tapahtuu olemassaolevan tiedoston perään, kannattaa kirjoituksessa käyttää <a href="https://docs.oracle.com/javase/8/docs/api/java/io/FileWriter.html" target="_blank" norel>FileWriter</a>-luokkaa.

<br/>

<quiz id="05822c24-34ad-5a60-a3f0-b09ac094c7c7"></quiz>


<!-- <programming-exercise name='Muistava sanakirja (4 osaa)' nocoins='true' tmcname='osa10-Osa10_13.MuistavaSanakirja'> -->

<programming-exercise name='Saveable dictionary (4 parts)' nocoins='true' tmcname='part10-Part10_13.SaveableDictionary'>

<!-- Tässä tehtävässä laajennetaan sanakirjaa siten, että sanat voidaan lukea tiedostosta ja kirjoittaa tiedostoon. Sanakirjan tulee myös osata kääntää molempiin suuntiin, suomesta vieraaseen kieleen sekä toiseen suuntaan (tehtävässä oletetaan hieman epärealistisesti, että suomen kielessä ja vieraassa kielessä ei ole yhtään samalla tavalla kirjoitettavaa sanaa). Tehtävänäsi on luoda sanakirja luokkaan `MuistavaSanakirja`. Toteuta luokka pakkaukseen `sanakirja`. -->

In this exercise you will be expanding the dictionary, so that the words can be read from and written to a file. The dictionary should also be able to translate both ways; from English to Finnish and the other way around (unrealistically assuming that neither of the languages have words spelled the same way). Implement this in to the class `SaveableDictionary` in the package `dictionary`.


<!-- <h2>Muistiton perustoiminnallisuus</h2> -->

<h2>Basic functionality</h2>

<!-- Tee sanakirjalle parametriton konstruktori sekä metodit:

- `public void lisaa(String sana, String kaannos)` lisää sanan sanakirjaan. Jokaisella sanalla on vain yksi käännös ja jos sama sana lisätään uudelleen, ei tapahdu mitään.
- `public String kaanna(String sana)` palauttaa käännöksen annetulle sanalle. Jos sanaa ei tunneta, palautetaan null. -->

Create a constructor (without parameters) and the following methods for the dictionary:

- `public void add(String word, String translation)` adds a word pair to the dictionary. Each word has only one translation and attempts to add more will be ignored.
- `public String translate(String word)` returns the translation. If the word is not in the dictionary, return null.


Example of the functioning of the dictionary:


<!-- ```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("apina", "apfe");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("monkey"));
System.out.println(sanakirja.kaanna("ohjelmointi"));
System.out.println(sanakirja.kaanna("banana"));
``` -->

```java
SaveableDictionary dictionary = new SaveableDictionary();
dictionary.add("apina", "monkey");
dictionary.add("banaani", "banana");
dictionary.add("apina", "apfe");

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("monkey"));
System.out.println(dictionary.translate("ohjelmointi"));
System.out.println(dictionary.translate("banana"));
```

Output:

<sample-output>

monkey
apina
null
banaani

</sample-output>

<!-- Kuten tulostuksesta ilmenee, käännöksen lisäämisen jälkeen sanakirja osaa tehdä käännöksen molempiin suuntiin. -->

As it can be seen from the output, the dictionary can work in both ways after the addition of the translation.


<!-- <b>Huom:</b> metodit `lisaa` ja `kaanna` eivät lue tiedostoa tai kirjoita tiedostoon! Myöskään konstruktori ei koske tiedostoon. -->


<b>Please note:</b> The methods `add` and `translate` do not read or write from/to any file! The constructors should not touch any file either.


<!-- <h2>Sanojen poistaminen</h2> -->

<h2>Deleting words</h2>


<!-- Lisää sanakirjalle metodi `public void poista(String sana)` joka poistaa annetun sanan ja sen käännöksen sanakirjasta.

Kannattanee kerrata aiemmilta viikoilta materiaalia, mikä liittyy olioiden poistamiseen ArrayListista.

<b>HUOM2:</b> metodi `poista` ei kirjoita tiedostoon.

Sanakirjan tulee tässä vaiheessa toimia seuraavasti: -->

Add the method `public void delete(String word)` for the dictionary, which deletes the word and it's translation from the dictionary.

It would probably be advised to first do a quick recap of the material relating to deleting Objects from an ArrayList.

<b>NOTE2:</b> The method `delete` should not write anything in any file.

The dictionary should now function like this:


<!-- ```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja();
sanakirja.lisaa("apina", "monkey");
sanakirja.lisaa("banaani", "banana");
sanakirja.lisaa("ohjelmointi", "programming");
sanakirja.poista("apina");
sanakirja.poista("banana");

System.out.println(sanakirja.kaanna("apina"));
System.out.println(sanakirja.kaanna("monkey"));
System.out.println(sanakirja.kaanna("banana"));
System.out.println(sanakirja.kaanna("banaani"));
System.out.println(sanakirja.kaanna("ohjelmointi"));
``` -->

```java
SaveableDictionary dictionary = new SaveableDictionary();
dictionary.add("apina", "monkey");
dictionary.add("banaani", "banana");
dictionary.add("ohjelmointi", "programming");
dictionary.delete("apina");
dictionary.delete("banana");

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("monkey"));
System.out.println(dictionary.translate("banana"));
System.out.println(dictionary.translate("banaani"));
System.out.println(dictionary.translate("ohjelmointi"));
```

<!-- Tulostuu -->

Should print:

<sample-output>

null
null
null
null
programming

</sample-output>


<!-- Poisto siis toimii myös molemmin puolin, alkuperäisen sanan tai sen käännöksen poistamalla, poistuu sanakirjasta tieto molempien suuntien käännöksestä -->

So deletion should work in both ways too, by deleting the word or the translation will delete the whole wordpair.


<!-- <h2>Lataaminen tiedostosta</h2> -->

<h2>Loading the words from a file</h2>


<!-- Tee sanakirjalle konstruktori `public MuistavaSanakirja(String tiedosto)`  ja metodi `public boolean lataa()`, joka lataa sanakirjan konstruktorin parametrina annetun nimisestä tiedostosta. Jos tiedoston avaaminen tai lukeminen ei onnistu, palauttaa metodi false ja muuten true.

<b>Huom: </b> parameterillinen konstruktori ainoastaan kertoo sanakirjalle käytetävän tiedoston nimen. Konstruktori ei lue tiedostoa, tiedoston lukeminen tapahtuu *ainoastaan* metodissa `lataa`.

Sanakirjatiedostossa yksi rivi sisältää sanan ja sen käännöksen merkillä ":" erotettuna. Tehtäväpohjan mukana tuleva testaamiseen tarkoitettu sanakirjatiedosto `sanat.txt` on sisällöltään seuraava: -->

Create a new constructor `public SaveableDictionary(String file)` and a new method `public boolean load()`, which loads the words from the file with the filename given in the constructor. If the opening or reading of the file doesn't succeed, the method should return false (otherwise true).

<b>Please Note: </b> The constructor only gets the name of the file, It should not read it. The reading of the file happens *only* in the `load`-method.

One row in the dictionary file corresponds to one word and it's translation; splitted with the character ":". The dictionary file `words.txt` included in the exercise template for testing should look like this:

<sample-output>

apina:monkey
alla oleva:below
olut:beer

</sample-output>

<!-- Lue sanakirjatiedosto rivi riviltä lukijan metodilla `nextLine`. Voit pilkkoa rivin String metodilla `split` seuraavasti: -->

Read the dictionary file using the `nextLine`-method of the scanner. You can use the `split`-method of String to split the line:


<!-- ```java
Scanner tiedostonLukija = new ...
while (tiedostonLukija.hasNextLine()) {
    String rivi = tiedostonLukija.nextLine();
    String[] osat = rivi.split(":");   // pilkotaan rivi :-merkkien kohdalta

    System.out.println(osat[0]);     // ennen :-merkkiä ollut osa rivistä
    System.out.println(osat[1]);     // :-merkin jälkeen ollut osa rivistä
}
``` -->

```java
Scanner fileReader = new ...
while (fileReader.hasNextLine()) {
    String line = fileReader.nextLine();
    String[] parts = line.split(":");   // split the line on :-characters

    System.out.println(parts[0]);     // part of the line before the :-character
    System.out.println(parts[1]);     // part of the line after the :-character
}
```

<!-- Sanakirjaa käytetään seuraavasti: -->

The dictionary could now be used like this:


```java
SaveableDictionary dictionary = new SaveableDictionary("words.txt");
boolean loaded = dictionary.load();

if (loaded) {
    System.out.println("Loading the dictionary file succesful.");
}

System.out.println(dictionary.translate("apina"));
System.out.println(dictionary.translate("ohjelmointi"));
System.out.println(dictionary.translate("alla oleva"));
```

Should output:

<!-- <sample-output>

sanakirjan lataaminen onnistui
monkey
null
below

</sample-output> -->

<sample-output>

Loading the dictionary file succesful.
monkey
null
below

</sample-output>


<h2>Writing the words to a file</h2>


<!-- Tee sanakirjalle metodi `public boolean tallenna()`, jota kutsuttaessa sanakirjan sisältö kirjoitetaan konstruktorin parametrina annetun nimiseen tiedostoon. Jos tallennus ei onnistu, palauttaa metodi false ja muuten true. Sanakirjatiedostot tulee tallentaa ylläesitellyssä muodossa, eli ohjelman on osattava lukea itse kirjoittamiaan tiedostoja. -->

Create the method `public boolean save()`. It should write the contents of the dictionary to the file given as a parameter in the constructor. If the writing does not succeed, the method should return false (otherwise true), the dictionary file should be saved as described before. The code should be able to read the files it has written.

<!-- <b>Huom1:</b> mikään muu metodi kuin `tallenna` ei kirjoita tiedostoon. Jos teit edelliset kohdat oikein, sinun ei tulisi tarvita muuttaa mitään olemassaolevaa koodia. -->

<b>Note1:</b> Any method other than `save` should not write to any file. If you have implemented the save-method as described above you shouldn't need to change any code.

<!-- **Huom2:** vaikka sanakirja osaa käännökset molempiin suuntiin, ei sanakirjatiedostoon tule kirjoittaa kuin toinen suunta. Eli jos sanakirja tietää esim. käännöksen *tietokone = computer*, tulee tallennuksessa olla rivi: -->

**Note2:** While the dictionary knows how to translate both ways, the dictionary file doesn't need to include more than one way. Ie. if the dictionary knows the translation *tietokone = computer*, it should write the line:


<sample-output>

tietokone:computer

</sample-output>

<!-- tai rivi -->

or the line:

<sample-output>

computer:tietokone

</sample-output>

<!-- mutta ei molempia! -->

But not both!

<!-- Talletus kannattanee hoitaa siten, että koko käännöslista kirjoitetaan uudelleen vanhan tiedoston päälle, eli materiaalissa esiteltyä `append`-metodia ei kannata käyttää. -->

It is recommended to write the whole dictionary file over the old version, not using the `append`-method.

<!-- Sanakirjan lopullista versiota on tarkoitus käyttää  seuraavasti: -->

The final version of the dictionary should function like this:

<!-- ```java
MuistavaSanakirja sanakirja = new MuistavaSanakirja("sanat.txt");
sanakirja.lataa();

// käytä sanakirjaa

sanakirja.tallenna();
``` -->

```java
SaveableDictionary dictionary = new SaveableDictionary("words.txt");
dictionary.load();

// use the dictionary

dictionary.save();
```

<!-- Eli käytön aluksi ladataan sanakirja tiedostosta ja lopussa tallennetaan se takaisin tiedostoon jotta sanakirjaan tehdyt muutokset pysyvät voimassa seuraavallekin käynnistyskerralle. -->

The dictionary is first loaded from a file and at the end written to it, so that the changes carry over to the next time of use.

</programming-exercise>
