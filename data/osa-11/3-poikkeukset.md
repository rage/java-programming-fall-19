---
path: '/osa-11/3-poikkeukset'
title: 'Poikkeukset'
hidden: true
---



<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä poikkeukset ovat ja osaat varautua poikkeuksiin.
- Osaat heittää poikkeuksia.
- Tiedät että osaan poikkeksista tulee varautua, ja tiedät että on olemassa poikkeuksia joihin ei tarvitse erikseen varautua.

</text-box>

Poikkeukset ovat tilanteita, joissa ohjelman suoritus päättyy virheeseen. Ohjelmassa on esimerkiksi kutsuttu *null*-viitteeseen liittyvää metodia, jolloin ohjelmassa tapahtuu poikkeus `NullPointerException`. Vastaavasti taulukon ulkopuolella olevan indeksin hakeminen johtaa poikkeukseen `IndexOutOfBoundsException` ym.


Osa Javassa esiintyvistä poikkeuksista on sellaisia, että niihin tulee aina varautua. Näitä ovat esimerkiksi tiedoston lukemisessa tapahtuvaan virheeseen tai verkkoyhteyden katkeamiseen liittyvät poikkeukset. Osa poikkeuksista taas on ajonaikaisia poikkeuksia -- kuten vaikkapa NullPointerException --, joihin ei erikseen tarvitse varautua. Java ilmoittaa aina jos ohjelmassa on lause tai lauseke, jossa mahdollisesti tapahtuvaan poikkeukseen tulee varautua.


## Poikkeusten käsittely

Poikkeukset käsitellään `try { } catch (Exception e) { }` -lohkorakenteella. Avainsanan `try` aloittaman lohkon sisällä on lähdekoodi, jonka suorituksessa tapahtuu *mahdollisesti* poikkeus. Avainsanan `catch` aloittaman lohkon sisällä taas määritellään poikkeustilanteessa tapahtuva käsittely, eli mitä tehdään kun try-lohkossa tapahtuu poikkeus. Avainsanaa catch seuraa myös käsiteltävän poikkeuksen tyyppi, esimerkiksi "kaikki poikkeukset" eli Exception (`catch (Exception e)`).


```java
try {
    // poikkeuksen mahdollisesti heittävä ohjelmakoodi
} catch (Exception e) {
    // lohko johon päädytään poikkeustilanteessa
}
```

Avainsana `catch` eli *ota kiinni* tulee siitä, että poikkeukset *heitetään* (`throw`).

Kuten edellä todettiin, ajonaikaisiin poikkeuksiin kuten NullPointerException ei tarvitse erikseen varautua. Tällaiset poikkeukset voidaan jättää käsittelemättä, jolloin ohjelman suoritus päättyy virheeseen poikkeustilanteen tapahtuessa. Tarkastellaan erästä poikkeustilannetta nyt jo tutun merkkijonon kokonaisluvuksi muuntamisen kautta.


Olemme käyttäneet luokan `Integer` metodia <a href="http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#parseInt-java.lang.String-" target="_blank" rel="noopener">parseInt</a> merkkijonon kokonaisluvuksi muuntamiseen. Metodi heittää poikkeuksen `NumberFormatException`, jos sille parametrina annettu merkkijono ei ole muunnettavissa kokonaisluvuksi.

<br/>

```java
Scanner lukija = new Scanner(System.in);
System.out.print("Syötä numero: ");

int numero = Integer.parseInt(lukija.nextLine());
```

<sample-output>

Syötä numero: **tatti**
  **Exception in thread "..." java.lang.NumberFormatException: For input string: "tatti"**

</sample-output>


Yllä ohjelma heittää poikkeuksen, kun käyttäjä syöttää virheellisen numeron. Ohjelman suoritus päättyy tällöin virhetilanteeseen.

Lisätään esimerkkiin poikkeuksen käsittely. Kutsu, joka saattaa heittää poikkeuksen asetetaan `try`-lohkon sisään, ja virhetilanteessa tapahtuva toiminta `catch`-lohkon sisään.


```java
Scanner lukija = new Scanner(System.in);

System.out.print("Syötä numero: ");
int numero = -1;

try {
    numero = Integer.parseInt(lukija.nextLine());
} catch (Exception e) {
    System.out.println("Et syöttänyt kunnollista numeroa.");
}
```

<sample-output>

Syötä numero: **5**

</sample-output>

<sample-output>

Syötä numero: **enpäs!**
Et syöttänyt kunnollista numeroa.

</sample-output>


Avainsanan `try` määrittelemän lohkon sisältä siirrytään `catch`-lohkoon heti poikkeuksen tapahtuessa. Havainnollistetaan tätä lisäämällä tulostuslause `try`-lohkossa metodia `Integer.parseInt` kutsuvan rivin jälkeen.


```java
Scanner lukija = new Scanner(System.in);

System.out.print("Syötä numero: ");
int numero = -1;

try {
    numero = Integer.parseInt(lukija.nextLine());
    System.out.println("Hienosti syötetty!");
} catch (Exception e) {
    System.out.println("Et syöttänyt kunnollista numeroa.");
}
```

<sample-output>

Syötä numero: **5**
Hienosti syötetty!

</sample-output>

<sample-output>

Syötä numero: **enpäs!**
Et syöttänyt kunnollista numeroa.

</sample-output>


Ohjelmalle syötetty merkkijono `enpäs!` annetaan parametrina `Integer.parseInt`-metodille, joka heittää poikkeuksen, jos parametrina saadun merkkijonon muuntaminen luvuksi epäonnistuu. Huomaa, että `catch`-lohkossa oleva koodi suoritetaan *vain* poikkeustapauksissa.

Tehdään yllä olevasta luvun muuntajasta hieman hyödyllisempi. Tehdään siitä metodi, joka kysyy numeroa yhä uudestaan, kunnes käyttäjä syöttää oikean numeron. Metodin suoritus loppuu vasta silloin, kun käyttäjä syöttää kokonaisluvun.


```java
public int lueLuku(Scanner lukija) {
    while (true) {
        System.out.print("Syötä numero: ");

        try {
            int numero = Integer.parseInt(lukija.nextLine());
            return numero;
        } catch (Exception e) {
            System.out.println("Et syöttänyt kunnollista numeroa.");
        }
    }
}
```

<sample-output>

Syötä numero: **enpäs!**
Et syöttänyt kunnollista numeroa.
Syötä numero: **Matilla on ovessa tatti.**
Et syöttänyt kunnollista numeroa.
Syötä numero: **43**

</sample-output>


## Poikkeukset ja resurssit

Erilaisten käyttöjärjestelmäresurssien kuten tiedostojen lukemiseen on toteutettu erillinen versio poikkeustenhallinnasta. ns. try-with-resources -tyyppisessä poikkeustenhallinnassa avattava resurssi lisätään try-osaan määriteltävään ei-pakolliseen suluilla rajattavaan osaan.

Alla olevassa esimerkissä luetaan tiedoston "tiedosto.txt" kaikki rivit, jotka lisätään ArrayList-listaan. Tiedostoja lukiessa voidaan kohdata virhetilanne, joten tiedoston lukeminen vaatii erillisen "yrittämisen" (try) sekä mahdollisen virheen kiinnioton (catch).


```java
ArrayList<String> rivit = new ArrayList<>();

// luodaan lukija tiedoston lukemista varten
try (Scanner lukija = new Scanner(new File("tiedosto.txt"))) {

    // luetaan kaikki tiedoston rivit
    while (lukija.hasNextLine()) {
        rivit.add(lukija.nextLine());
    }
} catch (Exception e) {
    System.out.println("Virhe: " + e.getMessage());
}

// tee jotain luetuilla riveillä
```

Yllä kuvattu try-with-resources -lähestymistapa on hyödyllinen resurssien käsittelyssä, sillä tässä tapauksessa ohjelma sulkee käytetyt resurssit automaattisesti. Tällöin esimerkiksi tiedostoihin liittyvät viitteet saavat luvan "kadota", koska niille ei ole enää käyttöä. Mikäli taas resursseja ei suljeta, ovat tiedostot käyttöjärjestelmän näkökulmasta käytössä kunnes ohjelma sammutetaan.


## Käsittelyvastuun siirtäminen


Metodit ja konstruktorit voivat *heittää* poikkeuksia. Heitettäviä poikkeuksia on karkeasti ottaen kahdenlaisia. On poikkeuksia jotka on pakko käsitellä, ja on poikkeuksia joita ei ole pakko käsitellä. Poikkeukset käsitellään joko `try-catch` -lohkossa, tai *heittämällä ne ulos metodista*.


Alla olevassa esimerkissä luetaan parametrina annetun tiedoston rivit yksitellen. Tiedoston lukeminen saattaa heittää poikkeuksen -- voi olla, ettei tiedostoa esimerkiksi löydy, tai voi olla ettei siihen ole lukuoikeuksia. Tällainen poikkeus tulee käsitellä. Poikkeuksen käsittely tapahtuu  `try-catch` -lauseella. Seuraavassa esimerkissä emme juurikaan välitä poikkeustilanteesta, mutta tulostamme kuitenkin poikkeukseen liittyvän viestin.


```java
public List<String> lue(String tiedosto) {
    List<String> rivit = new ArrayList<>();

    try {
        Files.lines(Paths.get("tiedosto.txt")).forEach(rivi -> rivit.add(rivi));
    } catch (Exception e) {
        System.out.println("Virhe: " + e.getMessage());
    }

    return rivit;
}
```

Ohjelmoija voi myös jättää poikkeuksen käsittelemättä ja *siirtää vastuun* poikkeuksen käsittelystä metodin kutsujalle. Vastuun siirto tapahtuu heittämällä poikkeus metodista eteenpäin lisäämällä tästä tieto metodin määrittelyyn. Tieto poikkeuksen heitosta -- `throws *PoikkeusTyyppi*`, missä poikkeustyyppi esimerkiksi Exception -- lisätään ennen metodirungon avaavaa aaltosulkua.


```java
public List<String> lue(String tiedosto) throws Exception {
    ArrayList<String> rivit = new ArrayList<>();
    Files.lines(Paths.get(tiedosto)).forEach(rivi -> rivit.add(rivi));
    return rivit;
}
```

Nyt metodia `lue` kutsuvan metodin tulee joko käsitellä poikkeus `try-catch` -lohkossa tai siirtää poikkeuksen käsittelyn vastuuta eteenpäin. Joskus poikkeuksen käsittelyä vältetään viimeiseen asti, ja `main`-metodikin heittää poikkeuksen käsiteltäväksi eteenpäin:


```java
public class Paaohjelma {
   public static void main(String[] args) throws Exception {
       // ...
   }
}
```

Tällöin mahdollinen poikkeus päätyy ohjelman suorittajalle eli Javan virtuaalikoneelle, joka keskeyttää ohjelman suorituksen poikkeukseen johtavan virheen tapahtuessa.


## Poikkeusten heittäminen

Voimme heittää poikkeuksen `throw`-komennolla. Esimerkiksi `NumberFormatException`-luokasta luodun poikkeuksen heittäminen tapahtuisi komennolla `throw new NumberFormatException()`. Seuraava ohjelma päätyy aina poikkeustilaan.


```java
public class Ohjelma {

    public static void main(String[] args) throws Exception {
        throw new NumberFormatException(); // Ohjelmassa heitetään poikkeus
    }
}
```

Eräs poikkeus, johon käyttäjän ei ole pakko varautua on `IllegalArgumentException`. Poikkeuksella `IllegalArgumentException` kerrotaan että metodille tai konstruktorille annettujen parametrien arvot ovat *vääränlaiset*. IllegalArgumentException-poikkeusta käytetään esimerkiksi silloin, kun halutaan varmistaa, että parametreilla on tietyt arvot.

Luodaan luokka `Arvosana`, joka saa konstruktorin parametrina kokonaislukutyyppisen arvosanan.


```java
public class Arvosana {
    private int arvosana;

    public Arvosana(int arvosana) {
        this.arvosana = arvosana;
    }

    public int getArvosana() {
        return this.arvosana;
    }
}
```

Haluamme seuraavaksi varmistaa, että Arvosana-luokan konstruktorin parametrina saatu arvo täyttää tietyt kriteerit. Arvosanan tulee olla aina välillä 0-5. Jos arvosana on jotain muuta, haluamme *heittää poikkeuksen*. Lisätään `Arvosana`-luokan konstruktoriin ehtolause, joka tarkistaa onko arvosana arvovälin 0-5 ulkopuolella. Jos on, heitetään poikkeus `IllegalArgumentException` sanomalla `throw new IllegalArgumentException("Arvosanan tulee olla välillä 0-5");`.


```java
public class Arvosana {
    private int arvosana;

    public Arvosana(int arvosana) {
        if (arvosana < 0 || arvosana > 5) {
            throw new IllegalArgumentException("Arvosanan tulee olla välillä 0-5");
        }

        this.arvosana = arvosana;
    }

    public int getArvosana() {
        return this.arvosana;
    }
}
```

```java
Arvosana arvosana = new Arvosana(3);
System.out.println(arvosana.getArvosana());

Arvosana virheellinenArvo = new Arvosana(22);
// tapahtuu poikkeus, tästä ei jatketa eteenpäin
```

<sample-output>

3
Exception in thread "..." java.lang.IllegalArgumentException: Arvosanan tulee olla välillä 0-5

</sample-output>


Jos poikkeus on esimerkiksi tyyppiä IllegalArgumentException, tai yleisemmin ajonaikainen poikkeus, ei sen heittämisestä tarvitse kirjoittaa erikseen metodin määrittelyyn.


<!-- <programming-exercise name='Parametrien validointi (2 osaa)' tmcname='osa11-Osa11_11.ParametrienValidointi'> -->

<programming-exercise name='Validating parameters (2 parts)' tmcname='part11-Part11_11.ValidatingParameters'>

<!-- Harjoitellaan hieman parametrien validointia `IllegalArgumentException`-poikkeuksen avulla. Tehtäväpohjassa tulee kaksi luokkaa, `Henkilo` ja `Laskin`. Muuta luokkia seuraavasti: -->

Let's practise a little parameter validation with the `IllegalArgumentException` exception. There are two classes included with the exercise base: `Person` and `Calculator`. Modify the classes in the following manner:

<!-- <h2>Henkilön validointi</h2> -->

<h2>Validating a person</h2>

<!-- Luokan `Henkilo` konstruktorin tulee varmistaa että parametrina annettu nimi ei ole null, tyhjä tai yli 40 merkkiä pitkä. Myös iän tulee olla väliltä 0-120. Jos joku edelläolevista ehdoista ei päde, tulee konstruktorin heittää `IllegalArgumentException`-poikkeus. -->

The constructor of the class `Person` should ensure that the name given as the parameter is not null, empty, or over 40 characters in length. The age should between 0 and 120. If some of these conditions are not met, the constructor should throw an `IllegalArgumentException`.


<!-- <h2>Laskimen validointi</h2> -->

<h2>Validating the calculator</h2>


<!-- Luokan `Laskin` metodeja tulee muuttaa seuraavasti: Metodin `kertoma` tulee toimia vain jos parametrina annetaan ei-negatiivinen luku (0 tai suurempi). Metodin `binomikerroin` tulee toimia vain jos parametrit ovat ei-negatiivisia ja osajoukon koko on pienempi kuin joukon koko. Jos jompikumpi metodeista saa epäkelpoja arvoja metodikutsujen yhteydessä, tulee metodien heittää poikkeus `IllegalArgumentException`. -->

The methods of the `Calculator` class should be follow in the following manner: The method `factorial` should only work if the parameter is a non-negative number (0 or greater). The method `binomialCoefficient` should only work when the parameters are non-negative and the subset size does not exceed the set size. If these methods receive invalid parameters when they are called, they should throw an `IllegalArgumentException`

</programming-exercise>


<text-box variant='hint' name='Poikkeusten tyypit'>

Edellä todettiin seuraavaa: *...poikkeuksia on karkeasti ottaen kahdenlaisia. On poikkeuksia jotka on pakko käsitellä, ja on poikkeuksia joita ei ole pakko käsitellä.*.


Poikkeukset, jotka on pakko käsitellä, ovat tarkemmin ottaen poikkeuksia, joiden mahdollinen heittäminen ja niihin varautuminen tarkastetaan käännösaikaisesti. Tämän takia joihinkin poikkeuksiin tulee joko varautua `try-catch`-lauseella tai ne tulee heittää edelleen metodiin liitettävällä `throws`-määreellä. Tällaisia poikkeuksia ovat esimerkiksi tiedostojen käsittelyyn liittyvät poikkeukset `IOException` ja `FileNotFoundException`.

Osa poikkeuksista on taas sellaisia, että niitä ei tarkasteta käännösaikaisesti, vaan ne saattavat tapahtua ohjelman suorituksen aikana. Tällaisiin ei ole pakko varautua `try-catch`-lauseella. Tällaisia poikkeuksia ovat esimerkiksi `IllegalArgumentException` ja `NullPointerException`.


</text-box>


## Poikkeukset ja rajapinnat

Rajapintaluokissa voidaan määritellä metodeja, jotka saattavat heittää poikkeuksen. Esimerkiksi seuraavan rajapinnan `Tiedostopalvelin` toteuttavat luokat heittävät *mahdollisesti* poikkeuksen metodeissa `lataa` ja `tallenna`.


```java
public interface Tiedostopalvelin {
    String lataa(String tiedosto) throws Exception;
    void tallenna(String tiedosto, String merkkijono) throws Exception;
}
```

Jos rajapinta määrittelee metodeille `throws Exception`-määreet, eli että metodit heittävät mahdollisesti poikkeuksen, tulee samat määreet olla myös rajapinnan toteuttavassa luokassa. Luokan ei kuitenkaan ole pakko heittää poikkeusta kuten alla olevasta esimerkistä näkee.


```java
public class Tekstipalvelin implements Tiedostopalvelin {

    private Map<String, String> data;

    public Tekstipalvelin() {
        this.data = new HashMap<>();
    }

    @Override
    public String lataa(String tiedosto) throws Exception {
        return this.data.get(tiedosto);
    }

    @Override
    public void tallenna(String tiedosto, String merkkijono) throws Exception {
        this.data.put(tiedosto, merkkijono);
    }
}
```

## Poikkeuksen tiedot


Poikkeusten käsittelytoiminnallisuuden sisältämä `catch`-lohko määrittelee catch-osion sisällä poikkeuksen johon varaudutaan `catch (*Exception e*)`. Poikkeuksen tiedot tallennetaan `e`-muuttujaan.


```java
try {
    // ohjelmakoodi, joka saattaa heittää poikkeuksen
} catch (Exception e) {
    // poikkeuksen tiedot ovat tallessa muuttujassa e
}
```

Luokka `Exception` tarjoaa hyödyllisiä metodeja. Esimerkiksi metodi `printStackTrace()` tulostaa *stack tracen*, joka kertoo miten poikkeukseen päädyttiin. Tutkitaan seuraavaa metodin `printStackTrace()` tulostamaa virhettä.


<sample-output>

Exception in thread "main" java.lang.NullPointerException
  at pakkaus.Luokka.tulosta(Luokka.java:43)
  at pakkaus.Luokka.main(Luokka.java:29)

</sample-output>


Stack tracen lukeminen tapahtuu alhaalta ylöspäin. Alimpana on ensimmäinen kutsu, eli ohjelman suoritus on alkanut luokan `Luokka` metodista `main()`. Luokan `Luokka` main-metodin rivillä 29 on kutsuttu metodia `tulosta()`. Metodin `tulosta` rivillä 43 on tapahtunut poikkeus `NullPointerException`. Poikkeuksen tiedot ovatkin hyvin hyödyllisiä virhekohdan selvittämisessä.


<quiznator id="5c8b64ba3972a9147410a33f"></quiznator>


<!-- <programming-exercise name='Sensorit ja lämpötila (4 osaa)' tmcname='osa11-Osa11_12.SensoritJaLampotila'> -->

<programming-exercise name='Sensors and temperature (4 parts)' tmcname='part11-Part11_12.SensorsAndTemperature'>


<!-- Kaikki luotavat luokat tulee sijoittaa pakkaukseen `sovellus`. -->

All the classes should be placed inside the `application` package.

<!-- Käytössämme on seuraava rajapinta: -->

We have the following interface at our disposal:

<!-- ```java
public interface Sensori {
    boolean onPaalla();  // palauttaa true jos sensori on päällä
    void paalle();       // käynnistä sensorin
    void poisPaalta();   // sulkee sensorin
    int mittaa();        // palauttaa sensorin lukeman jos sensori on päällä
                         // jos sensori ei ole päällä heittää poikkeuksen
                         // IllegalStateException
}
``` -->

```java
public interface Sensori {
    boolean isOn();    // returns true if the sensor is on
    void setOn();      // sets the sensor on
    void setOff();     // sets the sensor off
    int read();        // returns the value of the sensor if it's on
                       // if the sensor is not on, throw an IllegalStateException
}
```

<!-- <h2>Vakiosensori</h2> -->

<h2>Standard sensor</h2>

<!-- Tee luokka `Vakiosensori` joka toteuttaa rajapinnan `Sensori`. -->

Create a class called `StandardSensor` that implements the interface `Sensor`.

<!-- Vakiosensori on koko ajan päällä. Metodien paalle ja poisPaalta kutsuminen ei tee mitään. Vakiosensorilla tulee olla konstruktori, jonka parametrina on kokonaisluku. Metodikutsu `mittaa` palauttaa aina konstruktorille parametrina annetun luvun. -->

A standard sensor is always on. Calling the methods setOn and setOff has no effect. The StandardSensor must have a constructor that takes one integer parameter. The method call `read` returns the number that was given to the constructor.

<!-- Esimerkki: -->

An example:

<!-- ```java
public static void main(String[] args) {
    Vakiosensori kymppi = new Vakiosensori(10);
    Vakiosensori miinusViis = new Vakiosensori(-5);

    System.out.println(kymppi.mittaa());
    System.out.println(miinusViis.mittaa());

    System.out.println(kymppi.onPaalla());
    kymppi.poisPaalta();
    System.out.println(kymppi.onPaalla());
}
``` -->

```java
public static void main(String[] args) {
    StandardSensor ten = new StandardSensor(10);
    StandardSensor minusFive = new StandardSensor(-5);

    System.out.println(ten.read());
    System.out.println(minusFive.read());

    System.out.println(ten.isOn());
    ten.setOff();
    System.out.println(ten.isOn());
}
```

<sample-output>

10
-5
true
true

</sample-output>


<!-- <h2>Lampomittari</h2> -->

<h2>TemperatureSensor</h2>

<!-- Tee luokka `Lampomittari`, joka toteuttaa rajapinnan `Sensori`. -->

Create a class `TemperatureSensor` that implements the `Sensor` interface.

<!-- Aluksi lämpömittari on poissa päältä. Kutsuttaessa metodia `mittaa` kun mittari on päällä mittari arpoo luvun väliltä -30...30 ja palauttaa sen kutsujalle. Jos mittari ei ole päällä, heitetään poikkeus `IllegalStateException`. -->

At first a temperature sensor is off. When the method `read` is called and the sensor is on, the sensor randomly chooses an integer in the range -30...30 and returns it. If the sensor is off, the method `read` throws an `IllegalStateException`.

<!-- Käytä Javan valmista luokkaa <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Random.html" target="_blank" rel="noopener">Random</a> satunnaisen luvun arpomiseen. Saat luvun väliltä 0...60 kutsulla `new Random().nextInt(61);` -- väliltä -30...30 arvotun luvun saa vähentämällä väliltä 0...60 olevasta luvusta sopiva luku. -->

Use the ready-made Java class <a href="https://docs.oracle.com/javase/8/docs/api/java/util/Random.html" target="_blank" rel="noopener">Random</a> to choose the random number. You'll get an integer in the range 0...60 by calling `new Random().nextInt(61);` -- to get a random integer in the range -30...30 you'll have to subtract a suitable number from the random number in the range 0...60.

<br/>


<!-- <h2>Keskiarvosensori</h2> -->

<h2>Average sensor</h2>

<!-- Tee luokka `Keskiarvosensori`, joka toteuttaa rajapinnan `Sensori`. -->

Create a class called `AverageSensor` that implements the interface `Sensor`.

<!-- Keskiarvosensori sisältää useita sensoreita. Rajapinnan `Sensori` määrittelemien metodien lisäksi keskiarvosensorilla on metodi `public void lisaaSensori(Sensori lisattava)` jonka avulla keskiarvosensorin hallintaan lisätään uusi sensori. -->

An average sensor includes multiple sensors. In addition to the methods defined in the `Sensor` interface, the AverageSensor has the method `public void addSensor(Sensor toAdd)` that can be used to add a new sensor for the average sensor to control.

<!-- Keskiarvosensori on päällä silloin kuin *kaikki* sen sisältävät sensorit ovat päällä. Kun keskiarvosensori käynnistetään, täytyy kaikkien sen sisältävien sensorien käynnistyä jos ne eivät ole käynnissä. Kun keskiarvosensori suljetaan, täytyy ainakin yhden sen sisältävän sensorin mennä pois päältä. Saa myös käydä niin että kaikki sen sisältävät sensorit menevät pois päältä. -->

An AverageSensor is on when *all* its sensors are on. When `setOn` is called, all the sensors must be set on. When `setOff` is called, at least one of the sensors must be set off. It's also acceptable to set off all the sensors.

<!-- Keskiarvosensorin metodi `mittaa` palauttaa sen sisältämien sensoreiden lukemien keskiarvon (koska paluuarvo on `int`, pyöristyy lukema alaspäin kuten kokonaisluvuilla tehdyissä jakolaskuissa). Jos keskiarvosensorin metodia `mittaa` kutsutaan sensorin ollessa poissa päältä, tai jos keskiarvosensorille ei vielä ole lisätty yhtään sensoria heitetään poikkeus `IllegalStateException`. -->

The method `read` of AverageSensor returns the average of the `read` methods of its sensors (since the return value is `int`, the number is rounded down as is the case with integer division). If this method is called while the AverageSensor is off, or if no sensors have been added to it, the method should throw an `IllegalStateException`.

<!-- Seuraavassa sensoreja käyttävä esimerkkiohjelma (huomaa, että sekä Lämpömittarin että Keskiarvosensorin konstruktorit ovat parametrittomia): -->

Here follows an example program that uses the sensors (NB: the constructors of both TemperatureSensor and AverageSensor are non-parameterized):


<!-- ```java
public static void main(String[] args) {
    Sensori kumpula = new Lampomittari();
    kumpula.paalle();
    System.out.println("lämpötila Kumpulassa " + kumpula.mittaa() + " astetta");

    Sensori kaisaniemi = new Lampomittari();
    Sensori helsinkiVantaa = new Lampomittari();

    Keskiarvosensori paakaupunki = new Keskiarvosensori();
    paakaupunki.lisaaSensori(kumpula);
    paakaupunki.lisaaSensori(kaisaniemi);
    paakaupunki.lisaaSensori(helsinkiVantaa);

    paakaupunki.paalle();
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");
}
``` -->

```java
public static void main(String[] args) {
    Sensor kumpula = new TemperatureSensor();
    kumpula.setOn();
    System.out.println("temperature in Kumpula " + kumpula.mittaa() + " degrees Celsius");

    Sensor kaisaniemi = new TemperatureSensor();
    Sensor helsinkiVantaaAirport = new TemperatureSensor();

    AverageSensor helsinkiRegion = new AverageSensor();
    helsinkiRegion.addSensor(kumpula);
    helsinkiRegion.addSensor(kaisaniemi);
    helsinkiRegion.addSensor(helsinkiVantaaAirport);

    helsinkiRegion.setOn();
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");
}
```

<!-- Alla olevan esimerkin tulostukset riippuvat arvotuista lämpötiloista: -->

The prints below depend on which temperatures are randomly returned:


<!-- <sample-output>

lämpötila Kumpulassa 11 astetta
lämpötila Pääkaupunkiseudulla 8 astetta

</sample-output> -->

<sample-output>

temperature in Kumpula 11 degrees Celsius
temperature in Helsinki region 8 degrees Celsius

</sample-output>


<!-- <h2>Kaikki mittaukset</h2> -->

<h2>All readings</h2>

<!-- Lisää luokalle Keskiarvosensori metodi `public List<Integer> mittaukset()`, joka palauttaa listana kaikkien keskiarvosensorin avulla suoritettujen mittausten tulokset. Seuraavassa esimerkki metodin toiminnasta: -->

Add to the class AverageSensor the method `public List<Integer> readings()`. The method should return the results of all the executed readings that the average sensor has done as a list. Here is an example:

<!-- ```java
public static void main(String[] args) {
    Sensori kumpula = new Lampomittari();
    Sensori kaisaniemi = new Lampomittari();
    Sensori helsinkiVantaa = new Lampomittari();

    Keskiarvosensori paakaupunki = new Keskiarvosensori();
    paakaupunki.lisaaSensori(kumpula);
    paakaupunki.lisaaSensori(kaisaniemi);
    paakaupunki.lisaaSensori(helsinkiVantaa);

    paakaupunki.paalle();
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");
    System.out.println("lämpötila Pääkaupunkiseudulla " + paakaupunki.mittaa() + " astetta");

    System.out.println("mittaukset: " + paakaupunki.mittaukset());
}
``` -->

```java
public static void main(String[] args) {
    Sensor kumpula = new TemperatureSensor();
    Sensor kaisaniemi = new TemperatureSensor();
    Sensor helsinkiVantaaAirport = new TemperatureSensor();

    AverageSensor helsinkiRegion = new AverageSensor();
    helsinkiRegion.addSensor(kumpula);
    helsinkiRegion.addSensor(kaisaniemi);
    helsinkiRegion.addSensor(helsinkiVantaaAirport);

    helsinkiRegion.setOn();
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");
    System.out.println("temperature in Helsinki region " + helsinkiRegion.read() + " degrees Celsius");

    System.out.println("readings: " + helsinkiRegion.readings());
}
```

<!-- Alla olevan esimerkin tulostukset riippuvat jälleen arvotuista lämpötiloista: -->

Again, the exact prints depend on the randomized readings:

<sample-output>

temperature in Helsinki region -10 degrees Celsius
temperature in Helsinki region -4 degrees Celsius
temperature in Helsinki region 5 degrees Celsius

readings: [-10, -4, 5]

</sample-output>

</programming-exercise>
