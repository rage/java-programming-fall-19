---
path: "/osa-6/1-olioista-koostuvat-oliot"
title: "Olioita listalla ja listan sisältävät oliot"
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

<!-- - Kertaat listojen käyttöä.
- Tiedät, että viittaustyyppisen muuttujan lisääminen listalle kopioi listalle muuttujan viitteen.
- Osaat käyttää listaa oliomuuttujana. -->

- You review the use of lists.
- You know that adding a reference-type variable to a list copies the reference of the variable to the list.
- You know how to use a list as an instance variable.

</text-box>

<!-- Tutustutaan seuraavaksi olioihin, jonka sisältävät listan. Tällaisia olioita ovat esimerkiksi joukkoja kuvaavat oliot, kuten vaikkapa soittolistat.

Alla olevassa esimerkissä käsitteelle soittolista on luotu luokka. Soittolista sisältää kappaleita: siihen voi lisätä kappaleita, siitä voi poistaa kappaleita, ja siinä olevat kappaleet voi tulostaa. -->

We'll now be looking at objects that contain lists. These kinds of objects are, for instance, those that represent collections, such as playlists.

In the example below, a class for the playlist concept has been created . A playlist contains songs: you can add songs to it, remove them from it, and also print them.

<!-- ```java
// importit

public class Soittolista {
    private ArrayList<String> kappaleet;

    public Soittolista() {
        this.kappaleet = new ArrayList<>();
    }

    public void lisaaKappale(String kappale) {
        this.kappaleet.add(kappale);
    }

    public void poistaKappale(String kappale) {
        this.kappaleet.remove(kappale);
    }

    public void tulostaKappaleet() {
        for (String kappale: this.kappaleet) {
            System.out.println(kappale);
        }
    }
}
``` -->

```java
// imports

public class Playlist {
    private ArrayList<String> songs;

    public Playlist() {
        this.songs = new ArrayList<>();
    }

    public void addSong(String song) {
        this.songs.add(song);
    }

    public void removeSong(String song) {
        this.songs.remove(song);
    }

    public void printSongs() {
        for (String song: this.songs) {
            System.out.println(song);
        }
    }
}
```

<!-- Soittolistojen luominen on edellisen luokan avulla helppoa. -->

Creating playlists is easy with the help of the class above.

<!-- ```java
Soittolista lista = new Soittolista();
lista.lisaaKappale("Sorateiden kuningas");
lista.lisaaKappale("Teuvo, maanteiden kuningas");
lista.tulostaKappaleet();
``` -->

```java
Playlist list = new Playlist();
list.addSong("Sorateiden kuningas");
list.addSong("Teuvo, maanteiden kuningas");
list.printSongs();
```

<sample-output>

Sorateiden kuningas
Teuvo, maanteiden kuningas

</sample-output>

<!-- <programming-exercise name='Ruokalis (3 osaa)' tmcname='osa06-Osa06_01.Ruokalis'> -->
<programming-exercise name='Menu (3 osaa)' tmcname='osa06-Osa06_01.Menu'>

<!-- Kumpulan kampuksella Helsingissä toimivaan Unicafe-nimiseen gourmet-ravintolaan tarvitaan uusi ruokalista. Keittiömestari tietää ohjelmoinnista, ja haluaa listan hallinnointiin tietokonejärjestelmän. Toteutetaan tässä tehtävässä järjestelmän sydän, luokka Ruokalista.

Tehtäväpohjan mukana tulee `Main`-luokka, jossa voit testata ruokalistan toimintaa. Ruokalistan toteuttamista varten saat seuraavanlaisen tehtäväpohjan: -->

The gourmet 'Unicafe' restaurant on Helsinki's Kumpula campus needs a new menu. The chef knows about programming and wants a computer system to manage the list. In this assignment, we'll implement the heart of the system, the Menu class.

The exercise base comes with a `Main` class that you can use to test the menu. For the implementation of the menu, you'll have the following template:

<!-- ```java
import java.util.ArrayList;

public class Ruokalista {

    private ArrayList<String> ateriat;

    public Ruokalista() {
        this.ateriat = new ArrayList<>();
    }

    // toteuta tänne tarvittavat metodit
}
``` -->

```java
import java.util.ArrayList;

public class Menu {

    private ArrayList<String> meals;

    public Menu() {
        this.meals = new ArrayList<>();
    }

    // implement the required methods here
}
```

<!-- Ruokalistaoliolla on oliomuuttujana ArrayList, jonka on tarkoitus tallentaa ruokalistalla olevien ruokalajien nimet. Ruokalistan tulee tarjota seuraavat metodit:

- `public void lisaaAteria(String ateria)` lisää aterian ruokalistalle. Mikäli ateria on jo listalla, sitä ei lisätä uudestaan.

- `public void tulostaAteriat()` tulostaa ateriat.

- `public void tyhjennaRuokalista()` tyhjentää ruokalistan.

Kun ruokalista on valmis, sitä voi käyttää seuraavalla tavalla. -->

The menu object has an ArrayList as an instance variable to store the names of the dishes on the menu. The menu should provide the following methods:

- `public void addMeal(String meal)` adds a meal to the menu. If the meal is already on the list, it should not be added again.

- `public void printMeals()` prints the meals.

- `public void clearMenu()` clears the menu.

Once the menu is done, you can use it as follows.

<!-- ```java
Ruokalista menu = new Ruokalista();
menu.lisaaAteria("Tofuratatouille");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Lihapyörykät sinappikastikeella");

menu.tulostaAteriat();
menu.tyhjennaRuokalista();

System.out.println();
menu.lisaaAteria("Tomaatti-mozzarellasalaatti");
menu.tulostaAteriat();
``` -->

```java
Menu menu = new Menu();
menu.addMeal("Tofuratatouille");
menu.addMeal("Chilli coconut chicken");
menu.addMeal("Chilli coconut chicken");
menu.addMeal("Meatballs with mustard sauce");

menu.printMeals();
menu.clearMenu();

System.out.println();
menu.addMeal("Tomato and mozzarella salad");
menu.printMeals();
```

<sample-output>

Tofuratatouille
Chilli coconut chicken
Meatballs with mustard sauce

Tomato and mozzarella salad

</sample-output>

<!-- <h2>Aterian lisääminen</h2>

Toteuta metodi `public void lisaaAteria(String ateria)`, joka lisää uuden aterian listalle `ateriat`. Jos lisättävä ateria on jo listalla, sitä ei tule lisätä uudelleen. Listan metodi `contains` on näppärä olemassaolon tarkastamiseen.

<h2>Aterioiden tulostaminen</h2>

Toteuta metodi `public void tulostaAteriat()`, joka tulostaa ateriat. Voit kokeilla ohjelmaa seuraavalla esimerkkikoodilla. -->
<h2>Adding a Meal</h2>

Implement the `public void addMeal(String meal)` method, which adds a new meal to the `meals` list. If the meal you want to add is already on the list, you shouldn't add it again. The list method `contains` is handy for checking an items existence on it.

<h2>Printing the Meals</h2>

Implement the `public void printMeals()` method, which prints the meals. You can test out the program using the following example code.

<!-- ```java
Ruokalista menu = new Ruokalista();
menu.lisaaAteria("Tofuratatouille");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Lihapyörykät sinappikastikeella");

menu.tulostaAteriat();
``` -->

```java
Menu menu = new Menu();
menu.addMeal("Tofuratatouille");
menu.addMeal("Chilli Coconut Chicken");
menu.addMeal("Chilli Coconut Chicken");
menu.addMeal("Meatballs with mustard sauce");

menu.printMeals();
```

<sample-output>

<!-- Tofuratatouille
Chili-kookoskana
Lihapyörykät sinappikastikeella -->

Tofuratatouille
Chilli Coconut Chicken
Meatballs with mustard sauce

</sample-output>

<!-- <h2>Ruokalistan tyhjentäminen</h2>

Toteuta metodi `public void tyhjennaRuokalista()` joka tyhjentää ruokalistan. `ArrayList`-luokalla on metodi josta on tässä hyötyä. NetBeans osaa vihjata käytettävissä olevista metodeista kun kirjoitat olion nimen ja pisteen. Yritä kirjoittaa `ateriat.` metodirungon sisällä ja katso mitä käy.

Kun ruokalista on valmis, kokeile sitä seuraavalla esimerkkikoodilla. -->
<h2>Clearing the Food List</h2>

Implement the `public void clearMenu()` method, which clears the menu. The `ArrayList` class has a method which is useful here. NetBeans can hint at the available methods when you type the object name an a dot. Try to write `meals.` inside the method frame and see what happens.

Once the menu is ready, try it with the following example code.

<!-- ```java
Ruokalista menu = new Ruokalista();
menu.lisaaAteria("Tofuratatouille");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Chili-kookoskana");
menu.lisaaAteria("Lihapyörykät sinappikastikeella");

menu.tulostaAteriat();
menu.tyhjennaRuokalista();

System.out.println();
menu.lisaaAteria("Tomaatti-mozzarellasalaatti");
menu.tulostaAteriat();
``` -->

```java
Menu menu = new Menu();
menu.addMeal("Tofuratatouille");
menu.addMeal("Chilli Coconut Chicken");
menu.addMeal("Chilli Coconut Chicken");
menu.addMeal("Meatballs with mustard sauce");

menu.printMeals();
menu.clearMenu();

System.out.println();
menu.addMeal("Tomato and mozzarella salad");
menu.printMeals();
```

<sample-output>

<!-- Tofuratatouille
Chili-kookoskana
Lihapyörykät sinappikastikeella

Tomaatti-mozzarellasalaatti -->

Tofuratatouille
Chilli Coconut Chicken
Meatballs with mustard sauce

Tomato and mozzarella salad

</sample-output>

</programming-exercise>

<!-- <programming-exercise name='Pakka (2 osaa)' tmcname='osa06-Osa06_02.Pakka'> -->
<programming-exercise name='Deque (2 parts)' tmcname='osa06-Osa06_02.Deque'>

<!-- Pakka on tietorakenne, johon voi lisätä ja josta voi ottaa. Aina päälle tai päältä.

<h2>Pakkaan lisääminen ja tyhjyyden tarkastaminen</h2>

Luo luokka `Pakka`, jolla on oliomuuttujana merkkijonoja sisältävä listan. Lisää luokalle seuraavat metodit:

- `public boolean onTyhja()` - palauttaa `boolean`-tyyppisen arvon (true tai false), joka kertoo onko pakka tyhjä.

- `public void lisaa(String arvo)` - lisää pakan päälle parametrina annetun arvon.

- `public ArrayList<String> arvot()` - palauttaa pakan sisältämän arvot listana.

Voit kokeilla luokkaasi seuraavalla koodilla: -->

A deque is a data structure that you can add to and take from. Always to the top of it or from the top.

<h2> Adding to the Deque and Checking Emptiness </h2>

Create a `Deque` class that has a list of strings as an instance variable. Add the following methods to the class:

- `public boolean isEmpty()` - returns a `boolean`-type value (true or false) that tells whether or not the deque is empty.

- `public void add(String value)` - Adds the value given as a parameter to the top of the deque.

- `public ArrayList<String> values()` - returns the values ​​contained in the deque as a list.

You can test your class with the following code:

<!-- ```java
Pakka p = new Pakka();
System.out.println(p.onTyhja());
System.out.println(p.arvot());
p.lisaa("Arvo");
System.out.println(p.onTyhja());
System.out.println(p.arvot());
``` -->

```java
Deque d = new Deque();
System.out.println(d.isEmpty());
System.out.println(d.values());
d.add("Value");
System.out.println(d.isEmpty());
System.out.println(d.values());
```

<sample-output>

<!-- true
[]
false
[Arvo] -->

true
[]
false
[Value]

</sample-output>

<!-- <h2>Pakasta ottaminen</h2>

Lisää luokalle `Pakka` metodi `public String ota()`, joka palauttaa pakan päällimmäisenä olevan arvon (eli pakkaan viimeisenä lisätyn arvon) ja poistaa sen pakasta. -->
<h2>Taking from the Deque</h2>

Add to the `Deque` class a `public String take()` method, which returns the topmost value of the deque (i.e., the last value added to the deque) and removes it from the deque.

<!-- ```java
Pakka p = new Pakka();
System.out.println(p.onTyhja());
System.out.println(p.arvot());
p.lisaa("Arvo");
System.out.println(p.onTyhja());
System.out.println(p.arvot());
String otettu = p.ota();
System.out.println(p.onTyhja());
System.out.println(p.arvot());
System.out.println(otettu);
``` -->

```java
Deque d = new Deque();
System.out.println(d.isEmpty());
System.out.println(d.values());
d.add("Value");
System.out.println(d.isEmpty());
System.out.println(d.values());
String taken = d.take();
System.out.println(d.isEmpty());
System.out.println(d.values());
System.out.println(take);
```

<sample-output>

<!-- true
[]
false
[Arvo]
true
[]
Arvo -->

true
[]
false
[Value]
true
[]
Value

</sample-output>

<!-- ```java
Pakka p = new Pakka();
p.lisaa("1");
p.lisaa("2");
p.lisaa("3");
p.lisaa("4");
p.lisaa("5");

while (!p.onTyhja()) {
    System.out.println(p.ota());
}
``` -->

```java
Deque d = new Deque();
d.add("1");
d.add("2");
d.add("3");
d.add("4");
d.add("5");

while (!d.isEmpty()) {
    System.out.println(d.ota());
}
```

<sample-output>

5
4
3
2
1

</sample-output>

<!-- Vinkki! Kun ArrayListiin lisätään arvo, se menee listan loppuun. Viimeksi lisätty arvo on siis listan viimeisessä indeksissä -- listan tarjoamasta `length`-metodista on hyötyä viimeisen indeksin selvittämisessä. Poistaminen tietystä indeksistä onnistuu listan tarjoaman `remove`-metodin avulla. -->

Tip! When a value is added to an ArrayList, it goes to the end of the list. As such, the most recently added value is in the last index of the list - the `length` method provided by the list is useful for finding the last index. You can remove an element from a particular index using the `remove` method provided by the list.

</programming-exercise>

<!-- ## Omia olioita oliomuuttujana olevalla listalla -->

## Objects in an Instance Variable List

<!-- Oliomuuttujana oleva lista voi sisältää merkkijonojen lisäksi myös muunlaisia olioita, kunhan listalla olevien olioiden tyyppi määritellään listan määrittelyn yhteydessä.

Loimme edellisessä osassa luokan `Huvipuistolaite`, jonka avulla tarkastellaan pääseekö henkilö laitteen kyytiin. Luokka `Huvipuistolaite` näyttää seuraavalta. -->

A list that is an object's instance variable can contain objects other than strings as long as the type of objects in the list is specified when defining the list.

In the previous section, we created a class called `AmusementParkRide`, which was used to check whether or not a person was eligible to get on a particular ride. The `Amusement park` class looks like the following.

<!-- ```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
    }

    public boolean paaseeKyytiin(Henkilo henkilo) {
        if (henkilo.getPituus() < this.alinPituus) {
            return false;
        }

        this.kavijoita++;
        return true;
    }

    public String toString() {
        return this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita;
    }
}
``` -->

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;

    public AmusementParkRide(String name, int minimumHeight) {
        this.name = name;
        this.minimumHeight = minimumHeight;
        this.visitors = 0;
    }

    public boolean isAllowedOn(Person person) {
        if (person.getPituus() < this.minimumHeight) {
            return false;
        }

        this.visitors++;
        return true;
    }

    public String toString() {
        return this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors;
    }
}
```

<!-- Laajennetaan luokkaa siten, että huvipuistolaite pitää kirjaa kyydissä olevista henkilöistä. Laajennetussa versiossa huvipuistolaitteella on oliomuuttujana lista, joka sisältää laitteeseen päässeet henkilöt. Lista luodaan konstruktorissa. -->

We'll extend the class so that the amusement park keeps track of the people on the ride. In this version, the ride has, as an instance variable, a list of the people who have been allowed on the ride. The list is created in the constructor.

<!-- ```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
        this.kyydissa = new ArrayList<>();
    }

    // ..
}
``` -->

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeigth;
    private int visitors;
    private ArrayList<Person> riding;

    public AmusementParkRide(String name, int minimumHeigth) {
        this.name = name;
        this.minimumHeigth = minimumHeigth;
        this.visitors = 0;
        this.riding = new ArrayList<>();
    }

    // ..
}
```

<!-- Muokataan seuraavaksi metodia `paaseeKyytiin`. Metodi lisää listalle ne henkilöt, jotka ovat tarpeeksi pitkiä. -->

Let's change the method `isAllowedOn`. The method adds to the list all the persons who meet the height requirements.

<!-- ```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
        this.kyydissa = new ArrayList<>();
    }

    public boolean paaseeKyytiin(Henkilo henkilo) {
        if (henkilo.getPituus() < this.alinPituus) {
            return false;
        }

        this.kavijoita++;
        this.kyydissa.add(henkilo);
        return true;
    }

    public String toString() {
        return this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita;
    }
}
``` -->

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private ArrayList<Person> riding;

    public AmusementParkRide(String name, int minimumHeight) {
        this.name = name;
        this.minimumHeight = minimumHeight;
        this.visitors = 0;
        this.riding = new ArrayList<>();
    }

    public boolean isAllowedOn(Person person) {
        if (person.getHeight() < this.minimumHeight) {
            return false;
        }

        this.visitors++;
        this.riding.add(person);
        return true;
    }

    public String toString() {
        return this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors;
    }
}
```

<!-- <programming-exercise name='Viestipalvelu' tmcname='osa06-Osa06_03.Viestipalvelu'> -->
<programming-exercise name='MessagingService' tmcname='osa06-Osa06_03.MessagingService'>

<!-- Tehtäväpohjassa on valmiina luokka `Viesti`, jonka avulla voidaan luoda viestejä kuvaavia olioita. Jokaisella viestillä on lähettäjä ja sisältö.

Toteuta luokka `Viestipalvelu`. Luokalla tulee olla parametriton konstruktori ja sen tulee sisältää lista `Viesti`-olioita. Lisää luokalle tämän jälkeen seuraavat kaksi metodia:

- `public void lisaa(Viesti viesti)` - lisää viestipalveluun parametrina annetun viestin mikäli viestin sisällön pituus on korkeintaan 280 merkkiä.

- `public ArrayList<Viesti> getViestit()` - palauttaa viestipaveluun lisätyt viestit.

Vinkki! Saat merkkijonon pituuden merkkijonoon liittyvällä `length()`-metodilla. -->

The exercise template comes with a pre-defined `Message` class that can be used to create objects representing messages. Each message has a sender and some content.

Implement the `MessagingService` class. The class must have a parameterless constructor and contain a list of `Message` objects. After that, add the following two methods to the class:

- `public void Add(Message message)` - adds a message passed as a parameter to the messaging service as long as the message content is at most 280 characters long.

- `public ArrayList<Message> getMessages()` - returns the messages added to the messaging service.

Tip! You can find out the length of the string using the `length()` method associated with the string.

</programming-exercise>

<!-- ### Listan sisältävän olion tulostaminen -->

### Printing an Object from a List

<!-- Muokataan seuraavaksi metodia `toString` siten, että metodin palauttama merkkijono sisältää jokaisen kyydissä olevan henkilön nimen. -->

Let's now modify the `toString` method so that the string returned by the method contains the name of each and every person on the ride.

<!-- ```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    // ...

    public String toString() {
        // luodaan listalla olevista henkilöistä merkkijono
        String kyydissaOlijat = "";
        for (Henkilo henkilo: kyydissa) {
            kyydissaOlijat = kyydissaOlijat + henkilo.getNimi() + "\n";
        }

        // palautetaan oliota kuvaava merkkijono,
        // joka sisältää myös kyydissä olijat
        return this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita + "\n" +
            "kyydissä:\n" + kyydissaOlijat;
    }
}
``` -->

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private ArrayList<Person> riding;

    // ...

    public String toString() {
        // let's form a string from all the people on the list
        String onTheRide = "";
        for (Person person: kyydissa) {
            onTheRide = onTheRide + person.getName() + "\n";
        }

        // we return a string describing the object
        // including the names of those on the ride
        return this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors + "\n" +
            "riding:\n" + onTheRide;
    }
}
```

<!-- Kokeillaan laajennettua huvipuistolaitetta: -->

Let's test out the extended amusement park ride:

<!-- ```java
Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(34);
juhana.setPituus(132);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.paaseeKyytiin(matti)) {
    System.out.println(matti.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(matti.getNimi() + " ei pääse laitteeseen");
}

if (hurjakuru.paaseeKyytiin(juhana)) {
    System.out.println(juhana.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(juhana.getNimi() + " ei pääse laitteeseen");
}

System.out.println(hurjakuru);
``` -->

```java
Person matti = new Person("Matti");
matti.setWeigth(86);
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setWeigth(34);
juhana.setHeight(132);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.isAllowedOn(matti)) {
    System.out.println(matti.getNimi() + " is allowed on the ride");
} else {
    System.out.println(matti.getNimi() + " is not allowed on the ride");
}

if (hurjakuru.isAllowedOn(juhana)) {
    System.out.println(juhana.getNimi() + " is allowed on the ride");
} else {
    System.out.println(juhana.getNimi() + " is not allowed on the ride");
}

System.out.println(hurjakuru);
```

<!-- Ohjelma tulostaa: -->

The program's output is:

<sample-output>

<!-- Hurjakuru, pituusalaraja: 140, kävijöitä: 0
kyydissä:

Matti pääsee laitteeseen
Juhana ei pääse laitteeseen
Hurjakuru, pituusalaraja: 140, kävijöitä: 1
kyydissä:
Matti -->

Hurjakuru, minimum height requirement: 140, visitors: 0
riding:

Matti is allowed on the ride
Juhana is not allowed on the ride
Hurjakuru, minimum height requirement: 140, visitors: 1
riding:
Matti

</sample-output>

<!-- Vaikka laitteessa ei ole ketään kyydissä, on tulostuksessa silti merkkijono `kyydissä:`. Muokataan metodia `toString` siten, että jos kyydissä ei ole ketään, metodi palauttamassa merkkijonossa on tieto siitä. -->

Even though there is no one on the ride, the string `riding:` is on the print output. Let's modify the `toString` method so that if there is no one on the ride, the string returned by the method informs of it.

<!-- ```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    public Huvipuistolaite(String nimi, int alinPituus) {
        this.nimi = nimi;
        this.alinPituus = alinPituus;
        this.kavijoita = 0;
        this.kyydissa = new ArrayList<>();
    }

    // ...

    public String toString() {

        String tulostus = this.nimi + ", pituusalaraja: " + this.alinPituus +
            ", kävijöitä: " + this.kavijoita + "\n";

        if (kyydissa.isEmpty()) {
            return tulostus + "ei ketään kyydissä.";
        }

        // luodaan listalla olevista henkilöistä merkkijono
        String kyydissaOlijat = "";

        for (Henkilo henkilo: kyydissa) {
            kyydissaOlijat = kyydissaOlijat + henkilo.getNimi() + "\n";
        }

        return tulostus + "\n" +
            "kyydissä:\n" + kyydissaOlijat;
    }
}
``` -->

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private ArrayList<Person> kyydissa;

    public AmusementParkRide(String name, int minimumHeight) {
        this.name = name;
        this.minimumHeight = minimumHeight;
        this.visitors = 0;
        this.riding = new ArrayList<>();
    }

    // ...

    public String toString() {

        String printOutput = this.name + ", minimum height requirement: " + this.minimumHeight +
            ", visitors: " + this.visitors + "\n";

        if (riding.isEmpty()) {
            return printOutput + "no one is on the ride.";
        }

        // we form a string from the people on the list
        String peopleOnRide = "";

        for (Person person: riding) {
            peopleOnRide = peopleOnRide + person.getName() + "\n";
        }

        return printOutput + "\n" +
            "on the ride:\n" + peopleOnRide;
    }
}
```

<!-- Nyt olion tulostus on parempi. -->

The print output has now been improved.

<!-- ```java
Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(34);
juhana.setPituus(132);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.paaseeKyytiin(matti)) {
    System.out.println(matti.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(matti.getNimi() + " ei pääse laitteeseen");
}

if (hurjakuru.paaseeKyytiin(juhana)) {
    System.out.println(juhana.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(juhana.getNimi() + " ei pääse laitteeseen");
}

System.out.println(hurjakuru);
``` -->

```java
Person matti = new Person("Matti");
matti.setWeight(86);
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setWeight(34);
juhana.setHeight(132);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.isAllowedOn(matti)) {
    System.out.println(matti.getName() + " is allowed on the ride");
} else {
    System.out.println(matti.getName() + " is not allowed on the ride");
}

if (hurjakuru.isAllowedOn(juhana)) {
    System.out.println(juhana.getName() + " is allowed on the ride");
} else {
    System.out.println(juhana.getName() + " is not allowed on the ride");
}

System.out.println(hurjakuru);
```

<!-- Ohjelma tulostaa: -->

The program's output is:
<sample-output>

<!-- Hurjakuru, pituusalaraja: 140, kävijöitä: 0
ei ketään kyydissä.

Matti pääsee laitteeseen
Juhana ei pääse laitteeseen
Hurjakuru, pituusalaraja: 140, kävijöitä: 1
kyydissä:
Matti -->

Hurjakuru, minimum height requirement: 140, visitors: 0
no one is on the ride.

Matti is allowed on the ride
Juhana is not allowed on the ride
Hurjakuru, minimum height requirement: 140, visitors: 1
on the ride:
Matti

</sample-output>

<!-- <programming-exercise name='Joukon tulostaminen' tmcname='osa06-Osa06_04.JoukonTulostaminen'> -->
<programming-exercise name='Printing a Set' tmcname='osa06-Osa06_04.PrintingASet'>

<!-- Tehtäväpohjassa on valmiina luokka `Joukko`, jota käytetään arvoja sisältävän joukon kuvaamiseen. Luokalta puuttuu tulostamiseen käytettävä `toString`-metodi.

Toteuta luokalle `toString`-metodi, jonka avulla tulostus toimii seuraavien esimerkkien kuvaamalla tavalla. -->

The exercise template has a predefined `Set` class, which is used to represent a group of values. The class is missing the `toString` method used for printing.

Implement a `toString` method for the class that will perform as demonstrated in the following examples.

<!-- ```java
Joukko j = new Joukko("aakkoset");
System.out.println(j);

System.out.println();

j.lisaa("a");
System.out.println(j);

System.out.println();

j.lisaa("b");
System.out.println(j);

System.out.println();

j.lisaa("c");
System.out.println(j);
``` -->

```java
Set s = new Set("alphabet");
System.out.println(s);

System.out.println();

s.add("a");
System.out.println(s);

System.out.println();

s.add("b");
System.out.println(s);

System.out.println();

s.add("c");
System.out.println(s);
```

<sample-output>

<!-- Joukko aakkoset on tyhjä.

Joukossa aakkoset on 1 alkio:
a

Joukossa aakkoset on 2 alkiota:
a
b

Joukossa aakkoset on 3 alkiota:
a
b
c -->

The set alphabet is empty.

The set alphabet has 1 element:
a

The set alphabet has 2 elements:
a
b

The set alphabet on 3 elements:
a
b
c

</sample-output>

<!-- ```java
Joukko j = new Joukko("hahmot");
System.out.println(j);

System.out.println();

j.lisaa("magneto");
System.out.println(j);

System.out.println();

j.lisaa("mystique");
System.out.println(j);

System.out.println();

j.lisaa("phoenix");
System.out.println(j);
``` -->

```java
Set s = new Set("characters");
System.out.println(s);

System.out.println();

s.lisaa("magneto");
System.out.println(s);

System.out.println();

s.lisaa("mystique");
System.out.println(s);

System.out.println();

s.lisaa("phoenix");
System.out.println(s);
```

<sample-output>

<!-- Joukko hahmot on tyhjä.

Joukossa hahmot on 1 alkio:
magneto

Joukossa hahmot on 2 alkiota:
magneto
mystique

Joukossa hahmot on 3 alkiota:
magneto
mystique
phoenix -->

The set characters is empty.

The set characters has 1 element:
magneto

The set characters has 2 elements:
magneto
mystique

The set characters has 3 elements:
magneto
mystique
phoenix

</sample-output>

</programming-exercise>

<!-- ### Olion sisältämän listan tyhjentäminen -->

### Clearing an Object's List

<!-- Lisätään huvipuistolaitteelle seuraavaksi metodi `poistaKaikkiKyydista`, joka poistaa kaikki laitteessa olevat henkilöt laitteen kyydistä. Tässä listan metodi `clear` on erittäin kätevä. -->

We'll next add a `removeEveryoneOnRide` method to the amusement park ride, which removes each and every person currently on the ride.The list method `clear` is very handy here.

<!-- ```java
public class Huvipuistolaite {
    // ..

    public void poistaKaikkiKyydista() {
        this.kyydissa.clear();
    }

    // ..
}
``` -->

```java
public class AmusementParkRIde {
    // ..

    public void removeEveryoneOnRide() {
        this.riding.clear();
    }

    // ..
}
```

<!-- ```java
Henkilo matti = new Henkilo("Matti");
matti.setPaino(86);
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPaino(34);
juhana.setPituus(132);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.paaseeKyytiin(matti)) {
    System.out.println(matti.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(matti.getNimi() + " ei pääse laitteeseen");
}

if (hurjakuru.paaseeKyytiin(juhana)) {
    System.out.println(juhana.getNimi() + " pääsee laitteeseen");
} else {
    System.out.println(juhana.getNimi() + " ei pääse laitteeseen");
}

System.out.println(hurjakuru);

hurjakuru.poistaKaikkiKyydista();

System.out.println();
System.out.println(hurjakuru);
``` -->

```java
Person matti = new Person("Matti");
matti.setWeight(86);
matti.setHeight(180);

Person juhana = new Person("Juhana");
juhana.setWeight(34);
juhana.setHeight(132);

AmusementParkRide hurjakuru = new AmusementParkRide("Hurjakuru", 140);
System.out.println(hurjakuru);

System.out.println();

if (hurjakuru.isAllowedOn(matti)) {
    System.out.println(matti.getName() + " is allowed on the ride");
} else {
    System.out.println(matti.getName() + " is not allowed on the ride");
}

if (hurjakuru.isAllowedOn(juhana)) {
    System.out.println(juhana.getName() + " is allowed on the ride");
} else {
    System.out.println(juhana.getName() + " is not allowed on the ride");
}

System.out.println(hurjakuru);

hurjakuru.removeEveryoneOnRide();

System.out.println();
System.out.println(hurjakuru);
```

<!-- Ohjelma tulostaa: -->

The program's output is:

<sample-output>

<!-- Hurjakuru, pituusalaraja: 140, kävijöitä: 0
ei ketään kyydissä.

Matti pääsee laitteeseen
Juhana ei pääse laitteeseen
Hurjakuru, pituusalaraja: 140, kävijöitä: 1
kyydissä:
Matti

Hurjakuru, pituusalaraja: 140, kävijöitä: 1
ei ketään kyydissä. -->

Hurjakuru, minimum height requirement: 140, visitors: 0
no one is on the ride.

Matti is allowed on the ride.
Juhana is not allowed on the ride
Hurjakuru, minimum height requirement: 140, visitors: 1
on the ride:
Matti

Hurjakuru, minimum height requirement: 140, visitors: 1
no one is on the ride.

</sample-output>

<!-- ### Yhteenvetoarvon laskeminen listalla olevista olioista -->

### Calculating a Sum from Objects on a List

<!-- Tehdään huvipuistolaitteelle seuraavaksi metodi, joka laskee kyydissä olevien henkilöiden keskipituuden. Keskipituus saadaan laskemalla kyydissä olevien keskiarvo -- keskiarvo laskettiin selvittämällä lukujen summa ja jakamalla summa lukujen määrällä.

Alla olevassa toteutuksessa palautetaan arvo `-1` mikäli kyydissä ei ole yhtäkään henkilöä. Pituuksien keskiarvoa laskevassa ohjelmassa luku `-1` on mahdoton, joten siitä voi päätellä ettei keskiarvoa ole voitu laskea. -->

Let's now create a method for the amusement park ride that calculates the average height of the people currently on it. Average height can obtained by calculating the average from the persons on the ride -- the average is calculated by adding up the individual values and dividing that sum by the number of values.

The implementation underneath returns `-1` if not a single person is on the ride. The result of `-1` is impossible in a program that calculates averages. Based on that, we can determine that the average could not have been calculated.

<!-- ```java
public class Huvipuistolaite {
    private String nimi;
    private int alinPituus;
    private int kavijoita;
    private ArrayList<Henkilo> kyydissa;

    // ..

    public double kyydissaOlevienKeskipituus() {
        if (kyydissa.isEmpty()) {
            return -1;
        }

        int pituuksienSumma = 0;
        for (Henkilo hlo: kyydissa) {
            pituuksienSumma += hlo.getPituus();
        }

        return 1.0 * pituuksienSumma / kyydissa.size();
    }

    // ..
}
``` -->

```java
public class AmusementParkRide {
    private String name;
    private int minimumHeight;
    private int visitors;
    private ArrayList<Henkilo> riding;

    // ..

    public double averageHeightOfPeopleOnRide() {
        if (riding.isEmpty()) {
            return -1;
        }

        int sumOfHeights = 0;
        for (Person per: riding) {
            sumOfHeights += per.getHeight();
        }

        return 1.0 * sumOfHeights / riding.size();
    }

    // ..
}
```

```java
Henkilo matti = new Henkilo("Matti");
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPituus(132);

Henkilo awak = new Henkilo("Awak");
awak.setPituus(194);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);

hurjakuru.paaseeKyytiin(matti);
hurjakuru.paaseeKyytiin(juhana);
hurjakuru.paaseeKyytiin(awak);

System.out.println(hurjakuru);
System.out.println(hurjakuru.kyydissaOlevienKeskipituus());
```

Ohjelma tulostaa:

<sample-output>

Hurjakuru, pituusalaraja: 140, kävijöitä: 2
kyydissä:
Matti
Awak
187.0

</sample-output>

<programming-exercise name='Lahjapakkaamo (2 osaa)' tmcname='osa06-Osa06_05.Lahjapakkaamo'>

Tässä tehtävässä harjoitellaan lahjojen pakkaamista. Tehdään luokat `Lahja` ja `Pakkaus`. Lahjalla on nimi ja paino, ja Pakkaus sisältää lahjoja.

<h2>Lahja-luokka</h2>

Tee luokka `Lahja`, josta muodostetut oliot kuvaavat erilaisia lahjoja. Tallennettavat tiedot ovat tavaran nimi ja paino (kg).

Lisää luokkaan seuraavat metodit:

- Konstruktori, jolle annetaan parametrina lahjan nimi ja paino

- Metodi `public String getNimi()`, joka palauttaa lahjan nimen

- Metodi `public int getPaino()`, joka palauttaa lahjan painon

- Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "nimi (paino kg)"

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Lahja kirja = new Lahja("Aapiskukko", 2);

        System.out.println("Lahjan nimi: " + kirja.getNimi());
        System.out.println("Lahjan paino: " + kirja.getPaino());

        System.out.println("Lahja: " + kirja);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

Lahjan nimi: Aapiskukko
Lahjan paino: 2
Lahja: Aapiskukko (2 kg)

</sample-output>

<h2>Pakkaus-luokka</h2>

Tee luokka `Pakkaus`, johon voi lisätä lahjoja, ja joka pitää kirjaa pakkauksessa olevien lahjojen yhteispainosta. Luokassa tulee olla:

- Parametriton konstruktori

- Metodi `public void lisaaLahja(Lahja lahja)`, joka lisää parametrina annettavan lahjan pakkaukseen. Metodi ei palauta mitään arvoa.

- Metodi `public int yhteispaino()`, joka palauttaa pakkauksessa olevien lahjojen yhteispainon.

Tavarat kannattaa tallentaa `ArrayList`-olioon:

```java
ArrayList<Lahja> lahjat = new ArrayList<>();
```

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Lahja kirja = new Lahja("Aapiskukko", 2);

        Pakkaus paketti = new Pakkaus();
        paketti.lisaaLahja(kirja);
        System.out.println(paketti.yhteispaino());
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

2

</sample-output>

</programming-exercise>

### Tietyn olion hakeminen listalta

Tehdään seuraavaksi huvipuistolaitteelle metodi, joka palauttaa laitteen kyydissä olevista henkilöistä pisimmän. Metodin tulee siis sekä hakea listalta pisin henkilö, että palauttaa se.

Metodit, jotka hakevat listalta oliota, kannattaa toteuttaa seuraavasti. Ensin katsotaan onko lista tyhjä -- mikäli lista on tyhjä, palautetaan `null`-viite tai joku muu arvo, joka kertoo että listalla ei ollut arvoja. Tämän jälkeen luodaan palautettavaa oliota kuvaava oliomuuttuja, jonka arvoksi asetetaan listan ensimmäinen olio. Tätä seuraa listan arvojen läpikäynti siten, että kutakin listalla olevaa oliota verrataan palautettavaa oliota kuvaavaan oliomuuttujaan. Mikäli vertailussa löydetään hakuun paremmin osuva olio, asetetaan palautettavan olion arvoksi hakuun paremmin osuva olio. Lopulta palautettavaa oliota kuvaava oliomuuttuja palautetaan.

```java
public Henkilo haePisin() {
    // jos kyydissä ei ole ketään, palauta null-viite
    if (this.kyydissa.isEmpty()) {
        return null;
    }

    // luo palautettavaa oliota kuvaava oliomuuttuja,
    // jonka arvoksi asetetaan listan ensimmäinen olio
    Henkilo palautettava = this.kyydissa.get(0);

    // käy lista läpi
    for (Henkilo hlo: this.kyydissa) {
        // vertaa kutakin listalla olevaa oliota
        // palautettavaan -- tässä etsimme pisintä, joten
        // vertailemme pituuksia

        if (palautettava.getPituus() < hlo.getPituus()) {
            // mikäli vertailussa löydetään pidempi henkilö,
            // asetetaan se palautettavan arvoksi
            palautettava = hlo;
        }
    }

    // lopulta palautettavaa oliota kuvaava oliomuuttuja
    // palautetaan
    return palautettava;
}
```

Nyt pisimmän henkilön löytäminen on helppoa.

```java
Henkilo matti = new Henkilo("Matti");
matti.setPituus(180);

Henkilo juhana = new Henkilo("Juhana");
juhana.setPituus(132);

Henkilo awak = new Henkilo("Awak");
awak.setPituus(194);

Huvipuistolaite hurjakuru = new Huvipuistolaite("Hurjakuru", 140);

hurjakuru.paaseeKyytiin(matti);
hurjakuru.paaseeKyytiin(juhana);
hurjakuru.paaseeKyytiin(awak);

System.out.println(hurjakuru);
System.out.println(hurjakuru.kyydissaOlevienKeskipituus());

System.out.println();
System.out.println(hurjakuru.haePisin().getNimi());
Henkilo pisin = hurjakuru.haePisin();
System.out.println(pisin.getNimi());
```

<sample-output>

Hurjakuru, pituusalaraja: 140, kävijöitä: 2
kyydissä:
Matti
Awak
187.0

Awak
Awak

</sample-output>

<programming-exercise name='Joukon pisin' tmcname='osa06-Osa06_06.JoukonPisin'>

Tehtäväpohjassa on mukana aiemmasta tehtävästä tuttu luokka `Joukko`. Toteuta luokkaan metodi `public String pisin()`, joka palauttaa joukon pisimmän merkkijonon. Mikäli joukko on tyhjä, metodin tulee palauttaa `null`-viite.

```java
Joukko j = new Joukko("hahmot");
System.out.println("Pisin: " + j.pisin());

j.lisaa("magneto");
j.lisaa("mystique");
j.lisaa("phoenix");

System.out.println("Pisin: " + j.pisin());
```

<sample-output>

Pisin: null
Pisin: mystique

</sample-output>

</programming-exercise>

<programming-exercise name='Pituusjärjestys (3 osaa)' tmcname='osa06-Osa06_07.Pituusjarjestys'>

Tehtäväpohjassa on valmiina luokka `Henkilo`. Henkilöllä on nimi ja pituus. Toteutetaan tässä tehtävässä luokka `Huone`, jonne voi lisätä henkilöitä, ja jota voi käyttää henkilöiden pituusjärjestykseen asettamiseen -- henkilön ottaminen huoneesta palauttaa aina lyhyimmän henkilön.

Luokka tulee lopulta toimimaan seuraavalla tavalla.

<h2>Huone</h2>

Luo luokka `Huone`. Luokan `Huone` tulee sisältää oliomuuttujana listan henkilöitä, ja sillä tulee olla parametriton konstruktori. Lisää luokalle myös seuraavat metodit:

- `public void lisaa(Henkilo henkilo)` - lisää huoneeseen parametrina annetun henkilön.

- `public boolean onTyhja()` - palauttaa `boolean`-tyyppisen arvon `true` tai `false`, joka kertoo onko huone tyhjä.

- `public ArrayList<Henkilo> getHenkilot()` - palauttaa listan huoneessa olevista henkilöistä.

```java
Huone huone = new Huone();
System.out.println("Huone tyhjä? " + huone.onTyhja());
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));
System.out.println("Huone tyhjä? " + huone.onTyhja());

System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}
```

<sample-output>

Huone tyhjä? true
Huone tyhjä? false

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

</sample-output>

<h2>Lyhin henkilö</h2>

Lisää luokalle `Huone` metodi `public Henkilo lyhin()`, joka palauttaa huoneeseen lisätyistä henkilöistä lyhimmän. Mikäli huone on tyhjä, palauttaa `null`-viitteen. Metodin ei tule poistaa henkilöä huoneesta.

```java
Huone huone = new Huone();
System.out.println("Lyhin: " + huone.lyhin());
System.out.println("Huone tyhjä? " + huone.onTyhja());
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));
System.out.println("Huone tyhjä? " + huone.onTyhja());

System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}

System.out.println();
System.out.println("Lyhin: " + huone.lyhin());
System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}
```

<sample-output>

Lyhin: null
Huone tyhjä? true
Huone tyhjä? false

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

Lyhin: Nina (172 cm)

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

</sample-output>

<h2>Huoneesta ottaminen</h2>

Lisää luokalle `Huone` metodi `public Henkilo ota()`, ottaa huoneesta lyhimmän henkilön. Mikäli huone on tyhjä, metodi palauttaa `null`-viitteen.

```java
Huone huone = new Huone();
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));

System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}

System.out.println();
System.out.println("Lyhin: " + huone.ota());
System.out.println("");
for (Henkilo henkilo : huone.getHenkilot()) {
    System.out.println(henkilo);
}
```

<sample-output>

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Nina (172 cm)
Terhi (185 cm)

Lyhin: Nina (172 cm)

Lea (183 cm)
Kenya (182 cm)
Auli (186 cm)
Terhi (185 cm)

</sample-output>

Nyt henkilöt saadaan haluttaessa tulostettua myös pituusjärjestyksessä.

```java
Huone huone = new Huone();
huone.lisaa(new Henkilo("Lea", 183));
huone.lisaa(new Henkilo("Kenya", 182));
huone.lisaa(new Henkilo("Auli", 186));
huone.lisaa(new Henkilo("Nina", 172));
huone.lisaa(new Henkilo("Terhi", 185));

while (!huone.onTyhja()) {
    System.out.println(huone.ota());
}
```

<sample-output>

Nina (172 cm)
Kenya (182 cm)
Lea (183 cm)
Terhi (185 cm)
Auli (186 cm)

</sample-output>

</programming-exercise>

<programming-exercise name='Tavara, Matkalaukku ja Lastiruuma (7 osaa)' tmcname='osa06-Osa06_08.TavaraMatkalaukkuJaLastiruuma' nocoins='true'>

Tässä tehtäväsarjassa tehdään luokat `Tavara`, `Matkalaukku` ja `Lastiruuma`, joiden avulla harjoitellaan lisää olioita, jotka sisältävät toisia olioita.

<h2>Tavara-luokka</h2>

Tee luokka `Tavara`, josta muodostetut oliot vastaavat erilaisia tavaroita. Tallennettavat tiedot ovat tavaran nimi ja paino (kg).

Lisää luokkaan seuraavat metodit:

- Konstruktori, jolle annetaan parametrina tavaran nimi ja paino

- Metodi `public String getNimi()`, joka palauttaa tavaran nimen

- Metodi `public int getPaino()`, joka palauttaa tavaran painon

- Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "nimi (paino kg)"

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);

        System.out.println("Kirjan nimi: " + kirja.getNimi());
        System.out.println("Kirjan paino: " + kirja.getPaino());

        System.out.println("Kirja: " + kirja);
        System.out.println("Puhelin: " + puhelin);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

Kirjan nimi: Aapiskukko
Kirjan paino: 2
Kirja: Aapiskukko (2 kg)
Puhelin: Nokia 3210 (1 kg)

</sample-output>

<h2>Matkalaukku-luokka</h2>

Tee luokka `Matkalaukku`. Matkalaukkuun liittyy tavaroita ja maksimipaino, joka määrittelee tavaroiden suurimman mahdollisen yhteispainon.

Lisää luokkaan seuraavat metodit:

- Konstruktori, jolle annetaan maksimipaino

- Metodi `public void lisaaTavara(Tavara tavara)`, joka lisää parametrina annettavan tavaran matkalaukkuun. Metodi ei palauta mitään arvoa.

- Metodi `public String toString()`, joka palauttaa merkkijonon muotoa "x tavaraa (y kg)"

Tavarat kannattaa tallentaa `ArrayList`-olioon:

```java
ArrayList<Tavara> tavarat = new ArrayList<>();
```

Luokan `Matkalaukku` tulee valvoa, että sen sisältämien tavaroiden yhteispaino ei ylitä maksimipainoa. Jos maksimipaino ylittyisi lisättävän tavaran vuoksi, metodi `lisaaTavara` ei saa lisätä uutta tavaraa laukkuun.

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku matkalaukku = new Matkalaukku(5);
        System.out.println(matkalaukku);

        matkalaukku.lisaaTavara(kirja);
        System.out.println(matkalaukku);

        matkalaukku.lisaaTavara(puhelin);
        System.out.println(matkalaukku);

        matkalaukku.lisaaTavara(tiiliskivi);
        System.out.println(matkalaukku);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

0 tavaraa (0 kg)
1 tavaraa (2 kg)
2 tavaraa (3 kg)
2 tavaraa (3 kg)

</sample-output>

<h2>Kielenhuoltoa</h2>

Ilmoitukset "0 tavaraa" ja "1 tavaraa" eivät ole kovin hyvää suomea -- paremmat muodot olisivat "ei tavaroita" ja "1 tavara". Tee tämä muutos luokassa `Matkalaukku` sijaitsevaan toString-metodiin.

Nyt edellisen ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

ei tavaroita (0 kg)
1 tavara (2 kg)
2 tavaraa (3 kg)
2 tavaraa (3 kg)

</sample-output>

<h2>Kaikki tavarat</h2>

Lisää luokkaan `Matkalaukku` seuraavat metodit:

- metodi `tulostaTavarat`, joka tulostaa kaikki matkalaukussa olevat tavarat

- metodi `yhteispaino`, joka palauttaa tavaroiden yhteispainon

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku matkalaukku = new Matkalaukku(10);
        matkalaukku.lisaaTavara(kirja);
        matkalaukku.lisaaTavara(puhelin);
        matkalaukku.lisaaTavara(tiiliskivi);

        System.out.println("Matkalaukussa on seuraavat tavarat:");
        matkalaukku.tulostaTavarat();
        System.out.println("Yhteispaino: " + matkalaukku.yhteispaino() + " kg");
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

Matkalaukussa on seuraavat tavarat:
Aapiskukko (2 kg)
Nokia 3210 (1 kg)
Tiiliskivi (4 kg)
Yhteispaino: 7 kg

</sample-output>

Muokkaa myös luokkaasi siten, että käytät vain kahta oliomuuttujaa. Toinen sisältää maksimipainon, toinen on lista laukussa olevista tavaroista.

<h2>Raskain tavara</h2>

Lisää vielä luokkaan `Matkalaukku` metodi `raskainTavara`, joka palauttaa painoltaan suurimman tavaran. Jos yhtä raskaita tavaroita on useita, metodi voi palauttaa minkä tahansa niistä. Metodin tulee palauttaa olioviite. Jos laukku on tyhjä, palauta arvo <em>null</em>.

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("Tiiliskivi", 4);

        Matkalaukku matkalaukku = new Matkalaukku(10);
        matkalaukku.lisaaTavara(kirja);
        matkalaukku.lisaaTavara(puhelin);
        matkalaukku.lisaaTavara(tiiliskivi);

        Tavara raskain = matkalaukku.raskainTavara();
        System.out.println("Raskain tavara: " + raskain);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

Raskain tavara: Tiiliskivi (4 kg)

</sample-output>

<h2>Lastiruuma-luokka</h2>

Tee luokka `Lastiruuma`, johon liittyvät seuraavat metodit:

- konstruktori, jolle annetaan maksimipaino

- metodi `public void lisaaMatkalaukku(Matkalaukku laukku)`, joka lisää parametrina annetun matkalaukun lastiruumaan

- metodi `public String toString()`, joka palauttaa merkkijonon muotoa "x matkalaukkua (y kg)"

Tallenna matkalaukut sopivaan `ArrayList`-rakenteeseen.

Luokan `Lastiruuma` tulee valvoa, että sen sisältämien matkalaukkujen yhteispaino ei ylitä maksimipainoa. Jos maksimipaino ylittyisi uuden matkalaukun vuoksi, metodi `lisaaMatkalaukku` ei saa lisätä uutta matkalaukkua.

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku adanLaukku = new Matkalaukku(10);
        adanLaukku.lisaaTavara(kirja);
        adanLaukku.lisaaTavara(puhelin);

        Matkalaukku pekanLaukku = new Matkalaukku(10);
        pekanLaukku.lisaaTavara(tiiliskivi);

        Lastiruuma lastiruuma = new Lastiruuma(1000);
        lastiruuma.lisaaMatkalaukku(adanLaukku);
        lastiruuma.lisaaMatkalaukku(pekanLaukku);

        System.out.println(lastiruuma);
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

2 matkalaukkua (7 kg)

</sample-output>

<h2>Lastiruuman sisältö</h2>

Lisää luokkaan `Lastiruuma` metodi `public void tulostaTavarat()`, joka tulostaa kaikki lastiruuman matkalaukuissa olevat tavarat.

Seuraavassa on luokan käyttöesimerkki:

```java
public class Main {
    public static void main(String[] args) {
        Tavara kirja = new Tavara("Aapiskukko", 2);
        Tavara puhelin = new Tavara("Nokia 3210", 1);
        Tavara tiiliskivi = new Tavara("tiiliskivi", 4);

        Matkalaukku adanLaukku = new Matkalaukku(10);
        adanLaukku.lisaaTavara(kirja);
        adanLaukku.lisaaTavara(puhelin);

        Matkalaukku pekanLaukku = new Matkalaukku(10);
        pekanLaukku.lisaaTavara(tiiliskivi);

        Lastiruuma lastiruuma = new Lastiruuma(1000);
        lastiruuma.lisaaMatkalaukku(adanLaukku);
        lastiruuma.lisaaMatkalaukku(pekanLaukku);

        System.out.println("Ruuman matkalaukuissa on seuraavat tavarat:");
        lastiruuma.tulostaTavarat();
    }
}
```

Ohjelman tulostuksen tulisi olla seuraava:

<sample-output>

Ruuman matkalaukuissa on seuraavat tavarat:
Aapiskukko (2 kg)
Nokia 3210 (1 kg)
tiiliskivi (4 kg)

</sample-output>

</programming-exercise>
