---
path: '/osa-8/4-tiedon-ryhmittely-hajautustaulun-avulla'
title: 'Tiedon ryhmittely hajautustaulun avulla'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Osaat käyttää listaa hajautustaulun arvona.
- Osaat ryhmitellä tietoa hajautustaulua hyödyntäen.

</text-box>

Hajautustaulu sisältää korkeintaan yhden arvon yhtä avainta kohti. Seuraavassa esimerkissä tallennamme henkilöiden puhelinnumeroita hajautustauluun.

```java
HashMap<String, String> puhelinnumerot = new HashMap<>();
puhelinnumerot.put("Pekka", "040-12348765");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));

puhelinnumerot.put("Pekka", "09-111333");

System.out.println("Pekan numero: " + puhelinnumerot.get("Pekka"));
```

<sample-output>

Pekan numero: 040-12348765
Pekan numero: 09-111333

</sample-output>

Entä jos haluaisimme liittää yhteen avaimeen useita arvoja, eli esimerkiksi useampia puhelinnumeroita yhdelle henkilölle?

Koska hajautustaulun avaimet ja arvot voivat olla mitä tahansa muuttujia, myös listojen käyttäminen hajautustaulun arvona on mahdollista. Useamman arvon lisääminen yhdelle avaimelle onnistuu liittämällä avaimeen lista. Muutetaan puhelinnumeroiden tallennustapaa seuraavasti:

```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();
```

Nyt hajautustaulussa on jokaiseen avaimeen liitettynä lista. Vaikka new-komento luo hajautustaulun, ei hajautustaulu sisällä alussa yhtäkään listaa. Ne on luotava tarvittaessa erikseen.

```java
HashMap<String, ArrayList<String>> puhelinnumerot = new HashMap<>();

// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new ArrayList<>());

// ja lisätään Pekkaa vastaavalle listalle puhelinnumero
puhelinnumerot.get("Pekka").add("040-12348765");
// ja lisätään toinenkin puhelinnumero
puhelinnumerot.get("Pekka").add("09-111333");

System.out.println("Pekan numerot: " + puhelinnumerot.get("Pekka"));
```

<sample-output>

Pekan numero: [040-12348765, 09-111333]

</sample-output>

Määrittelimme muuttujan puhelinnumero tyypiksi `HashMap<String, ArrayList<String>>`. Tämä tarkoittaa hajautustaulua, joka käyttää avaimena merkkijonoa ja arvona merkkijonoja sisältävää listaa. Hajautustauluun lisättävät arvot ovat siis konkreettisia listoja.

```java
// liitetään Pekka-nimeen ensin tyhjä ArrayList
puhelinnumerot.put("Pekka", new  ArrayList<>());

// ...
```

Vastaavalla tyylillä voi toteuttaa esimerkiksi tehtävien pistekirjanpidon. Alla olevassa esimerkissä on hahmoteltu luokkaa `Tehtavakirjanpito`, mikä sisältää käyttäjäkohtaisen pistekirjanpidon. Käyttäjä esitetään merkkijonona ja pisteet kokonaislukuina.

```java
public class Tehtavakirjanpito {
    private HashMap<String, ArrayList<Integer>> tehdytTehtavat;

    public Tehtavakirjanpito() {
        this.tehdytTehtavat = new HashMap<>();
    }

    public void lisaa(String kayttaja, int tehtava) {
        // uudelle käyttäjälle on lisättävä HashMapiin tyhjä lista jos sitä
        // ei ole jo lisätty
        this.tehdytTehtavat.putIfAbsent(kayttaja, new ArrayList<>());

        // haetaan ensin käyttäjän tehtävät sisältävä lista ja tehdään siihen lisäys
        ArrayList<Integer> tehdyt = this.tehdytTehtavat.get(kayttaja);
        tehdyt.add(tehtava);

        // edellinen olisi onnitunut myös ilman apumuuttujaa seuraavasti
        // this.tehdytTehtavat.get(kayttaja).add(tehtava);
    }

    public void tulosta() {
        for (String nimi: tehdytTehtavat.keySet()) {
            System.out.println(nimi + ": " + tehdytTehtavat.get(nimi));
        }
    }
}
```

```java
Tehtavakirjanpito kirjanpito = new Tehtavakirjanpito();
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 4);
kirjanpito.lisaa("Ada", 3);
kirjanpito.lisaa("Ada", 3);

kirjanpito.lisaa("Pekka", 4);
kirjanpito.lisaa("Pekka", 4);

kirjanpito.lisaa("Matti", 1);
kirjanpito.lisaa("Matti", 2);

kirjanpito.tulosta();
```

<sample-output>

Matti: [1, 2]
Pekka: [4, 4]
Ada: [3, 4, 3, 3]

</sample-output>

<programming-exercise name='Dictionary of multiple translations' tmcname='part08Part08_14.DictionaryOfMultipleTranslations'>

<!-- Tehtävänäsi on toteuttaa luokka `UseanKaannoksenSanakirja`, johon voidaan lisätä yksi tai useampi käännös jokaiselle sanalle. Luokan tulee toteuttaa seuraavat metodit: -->

Your assignment is to create the class `DictionaryOfMultipleTranslations". In it can be stored one or more translations for each word. The class is to implement the following methods:

<!-- - `public void lisaa(String sana, String kaannos)` lisää käännöksen sanalle säilyttäen vanhat käännökset -->

- `public void add(String word, String translation)` adds the translation for the word and preserves the old translations.

<!-- - `public ArrayList<String> kaanna(String sana)` palauttaa listan, joka sisältää sanojen käännökset. Jos sanalle ei ole yhtäkään käännöstä, metodin tulee palauttaa tyhjä lista. -->

- `public ArrayList<String> translate(String word)` returns a list of the translations added for the word. If the word has no translations, the method should return an empty list.

<!-- - `public void poista(String sana)` poistaa sanan ja sen kaikki käännökset sanakirjasta. -->

- `public void remove(String word)` removes the word and all its translations from the dictionary.

<!-- Käännökset kannattanee lisätä `HashMap<String, ArrayList<String>>`-tyyppiseen oliomuuttujaan. -->

It's probably best to add the translations to an object variable that is of the type `HashMap<String, ArrayList<String>>`

<!-- Esimerkki: -->

An example:

<!-- ```java
UseanKaannoksenSanakirja sanakirja = new UseanKaannoksenSanakirja();
sanakirja.lisaa("kuusi", "six");
sanakirja.lisaa("kuusi", "spruce");

sanakirja.lisaa("pii", "silicon");
sanakirja.lisaa("pii", "pi");

System.out.println(sanakirja.kaanna("kuusi"));
sanakirja.poista("pii");
System.out.println(sanakirja.kaanna("pii"));
``` -->

```java
DictionaryOfMultipleTranslations dictionary = new UseanKaannoksenSanakirja();
dictionary.add("lie", "maata");
dictionary.add("lie", "valehdella");

dictionary.add("bow", "jousi");
dictionary.add("bow", "kumartaa");

System.out.println(dictionary.translate("lie"));
sanakirja.poista("bow");
System.out.println(dictionary.translate("bow"));
```

<!-- <sample-output>

[six, spruce]
[]

</sample-output> -->

<sample-output>

[maata, valehdella]
[]

</sample-output>

</programming-exercise>


<programming-exercise name='Storage facility (2 parts)' tmcname='part08-Part08_15.StorageFacility'>


<!-- <h2>Lisääminen ja sisällön tarkastelu</h2> -->

<h2>Adding items and examining contents</h2>

<!-- Tehtävänäsi on toteuttaa luokka `Kellari`, jonka avulla pidetään kirjaa kellarikomeroista sekä niiden sisällöistä. Luokan tulee toteuttaa seuraavat metodit: -->

Your task is creating a class called `StorageFacility` that can be used to keep track of storage units and their contents. The class is to implement the following methods:

<!-- - `public void lisaa(String komero, String tavara)` lisää parametrina annettuun komeroon parametrina annetun tavaran. -->

- `public void add(String unit, String item)` adds the parameter item to the storage unit that is also given as a parameter.

<!-- - `public ArrayList<String> sisalto(String komero)` palauttaa listan, joka sisältää parametrina annetun komeron sisältämät tavarat. Mikäli komeroa ei ole tai komerossa ei ole yhtäkään tavaraa, metodin tulee palauttaa tyhjä lista. -->

- `public ArrayList<String> contents(String storageUnit)` returns a list that contains all the items in the storage unit indicated by the parameter. If there is no such storage unit or it contains no items, the method should return an empty list.

<!-- Esimerkki: -->

Here's an example:

<!-- ```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

System.out.println(kellari.sisalto("a14"));
System.out.println(kellari.sisalto("f156"));
``` -->

```java
StorageFacility facility = new StorageFacility();
facility.add("a14", "ice skates");
facility.add("a14", "ice hockey stick");
facility.add("a14", "ice skates");

facility.add("f156", "rollerblades");
facility.add("f156", "rollerblades");

facility.add("g63", "six");
facility.add("g63", "pi");

System.out.println(facility.contents("a14"));
System.out.println(facility.contents("f156"));
```

<!-- <sample-output>

[luistimet, maila, luistimet]
[rullaluistimet, rullaluistimet]

</sample-output> -->

<sample-output>

[ice skates, ice hockey stick, ice skates]
[rollerblades, rollerblades]

</sample-output>


<!-- <h2>Komeroiden listaus ja komerosta poistaminen</h2> -->

<h2>Listing the units and removing from unit</h2>

<!-- Kun luokassa `Kellari` on toiminnallisuus tavaran komeroon lisäämiseen sekä komeron sisällöin listaamiseen, lisää sinne toiminnallisuus tavaran poistamiseen komerosta sekä komeroiden listaamiseen. -->

- Now the class `StorageFacility` contains the functionality to add an item to a storage unit and to list the contents of a unit. Next add the possibilities to remove an item from a storage unit and to list all the units.

<!-- - `public void poista(String komero, String tavara)` poistaa parametrina annetusta komerosta parametrina annetun tavaran. Huom! Poistaa vain yhden kappaleen -- mikäli samannimisiä tavaroita on useita, loput jäävät vielä jäljelle. Mikäli komero jäisi poiston jälkeen tyhjäksi, metodi poistaa myös komeron. -->

- `public void remove(String storageUnit, String item)` removes the given item from the given storage unit. NB! Only removes one item -- if there are several items with the same name, the rest still remain. If the storage unit would be empty after the removal, the method also removes the unit.

<!-- - `public ArrayList<String> komerot()` palauttaa listana kellarikomeroiden nimet. Huom! Listassa vain ne komerot, joissa on tavaraa. -->

- `public ArrayList<String> storageUnits()` returns the names of the storage units as a list. NB! Only the units that contain items are listed.

<!-- Esimerkki: -->

An example:

<!-- ```java
Kellari kellari = new Kellari();
kellari.lisaa("a14", "luistimet");
kellari.lisaa("a14", "maila");
kellari.lisaa("a14", "luistimet");

kellari.lisaa("f156", "rullaluistimet");
kellari.lisaa("f156", "rullaluistimet");

kellari.lisaa("g63", "six");
kellari.lisaa("g63", "pi");

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.sisalto("f156"));

kellari.poista("f156", "rullaluistimet");

System.out.println(kellari.komerot());
``` -->

```java
StorageFacility facility = new StorageFacility();
facility.add("a14", "ice skates");
facility.add("a14", "ice hockey stick");
facility.add("a14", "ice skates");

facility.add("f156", "rollerblades");
facility.add("f156", "rollerblades");

facility.add("g63", "six");
facility.add("g63", "pi");

facility.remove("f156", "rollerblades");

System.out.println(kellari.contents("f156"));

facility.remove("f156", "rollerblades");

System.out.println(facility.storageUnits());
```

<!-- <sample-output>

[rullaluistimet]
[a14, g63]

</sample-output> -->

<sample-output>

[rollerblades]
[a14, g63]

</sample-output>

<!-- Tulostuksessa näkyvä komeroiden järjestys voi poiketa esimerkistä. -->

The order of the storage units in the output may be different from this example.

</programming-exercise>
