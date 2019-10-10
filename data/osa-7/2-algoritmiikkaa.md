---
path: '/osa-7/2-algoritmiikkaa'
title: 'Algoritmiikkaa'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä käsite algoritmi tarkoittaa ja tunnet muutamia algoritmeja.
- Osaat kertoa miten valintajärjestämisalgoritmi toimii.
- Osaat kertoa miten peräkkäishaku- ja binäärihakualgoritmi toimii.

</text-box>

Tietojenkäsittelytieteen ja tietotekniikan ytimessä ovat algoritmit, eli selkeät ohjeet siitä, miten tietty tehtävä suoritetaan. Ohjelmoinnin yhteydessä algoritmit määritellään tyypillisesti ohjelmakoodin avulla.

Algoritmeihin kytketään usein käsite *tehokkuus*. Ohjelman tehokas toiminta, esimerkiksi halutun tiedon tarpeeksi nopea laskenta, on oleellinen osa ohjelmistojen käytettävyyttä. Mikäli seuraavan päivän sään ennustamiseen käytettävän algormitmin suorittaminen kestäisi kaksi päivää, ei ennustuksesta olisi juurikaan hyötyä. Vastaavasti televisio-ohjelmistoja selaava käyttäjä ei hyödy televisio-ohjelman tiedoista mitään jos tiedot latautuvat vasta ohjelman katsomisen jälkeen.

Laajemmin voidaan ajatella, että nopeasti tapahtuva tiedon hakeminen ja näyttäminen on oleellista oikeastaan lähes missä tahansa sovelluksessa. Tutustutaan seuraavaksi tiedon hakemiseen ja järjestämiseen liittyviin algoritmeihin. Vaikka esimerkit käyttävät taulukoita, algoritmit toimivat myös muilla tiedon tallentamiseen tarkoitetuilla tietorakenteilla kuten listoilla.


## Tiedon järjestäminen

Jos tieto ei noudata minkäänlaista järjestystä tai sääntöä, on tiedon hakeminen tietokoneelle työlästä. Tarvitsemme järjestystä!


### Valintajärjestäminen

Ohjelmoijan yleissivistykseen kuuluu ainakin yhden järjestämisalgoritmin (eli tavan järjestää taulukko) tuntemus. Tutustutaan erääseen "klassiseen" järjestämisalgoritmiin, valintajärjestämiseen. Tutustuminen tapahtuu harjoitustehtävien avulla.


<programming-exercise name='Sorting (5 parts)' tmcname='part07-Part07_03.Sorting'>

<h2>Finding the smallest value</h2>

<!-- Tee luokkaan `Paaohjelma` luokkametodi `pienin`, joka palauttaa metodille parametrina annetun kokonaislukutaulukon pienimmän luvun. -->

Create in the class `MainProgram` a class method `smallest` that takes an integer array as a parameter. It should return the smallest value in the array.

<!-- Metodin runko on seuraava: -->

Here is the structure of the method:

<!-- ```java
public static int pienin(int[] taulukko) {
    // kirjoita koodia tähän
}
``` -->

```java
public static int smallest(int[] array){
    // write your code here
}
```

<!-- Seuraava esimerkki esittelee metodin toimintaa: -->

The next example illustrates how the method works:

<!-- ```java
int[] luvut = {6, 5, 8, 7, 11};
System.out.println("Pienin: " + Paaohjelma.pienin(luvut));
``` -->

```java
int[] numbers = {6, 5, 8, 7, 11};
System.out.println("Smallest: " + MainProgram.smallest(numbers));
```

<!-- <sample-output>

Pienin: 5

</sample-output> -->

<sample-output>

Smallest: 5

</sample-output>


<!-- <h2>Pienimmän arvon indeksi</h2> -->

<h2>Index of the smallest value</h2>

<!-- Tee luokkaan Paaohjelma luokkametodi `pienimmanIndeksi`, joka palauttaa sille parametrina annetun taulukon pienimmän luvun indeksin. -->

Create a method called `indexOfSmallest` in the class MainProgram. It should return the index of the smallest number in the array that it receives as a parameter.

<!-- Metodin runko on seuraava: -->

Here is the structure of the method:

<!-- ```java
public static int pienimmanIndeksi(int[] taulukko) {
    // kirjoita koodia tähän
}
``` -->

```java
public static int indexOfSmallest(int[] array){
    // write your code here
}
```

<!-- Seuraava koodi esittelee metodin toimintaa: -->

The following code illustrates how to use the method:

<!-- ```java
// indeksit:   0  1  2  3  4
int[] luvut = {6, 5, 8, 7, 11};
System.out.println("Pienimmän indeksi: " + Paaohjelma.pienimmanIndeksi(luvut));
``` -->

```java
// indices:      0  1  2  3  4
int[] numbers = {6, 5, 8, 7, 11};
System.out.println("Index of the smallest number: " + MainProgram.indexOfSmallest(numbers));
```

<!-- <sample-output>

Pienimmän indeksi: 1

</sample-output> -->

<sample-output>

Index of the smallest number: 1

</sample-output>

<!-- Taulukon pienin luku on 5, ja sen indeksi eli sijaintipaikka taulukossa on 1. Muistathan, että taulukon numerointi alkaa 0:sta. -->

The smallest number in the array is 5, and its position in the array (i.e. index) is 1. Be sure to remember that indexing an array begins at 0.


<!-- <h2>Pienimmän arvon indeksi taulukon loppuosassa</h2> -->

<h2>Index of the smallest value after a certain value</h2>

<!-- Tee luokkaan Paaohjelma luokkametodi `pienimmanIndeksiAlkaen`, joka toimii samalla tavalla kuin edellisen tehtävän metodi, mutta ottaa huomioon vain taulukon loppuosan jostain indeksistä alkaen. Metodille annetaan parametrina taulukon lisäksi aloitusindeksi, josta lähtien pienintä lukua etsitään. -->

Create in the class MainProgram a class method called `indexOfSmallestFrom`. It works similarly to the method in the previous section, but only considers the table values from a certain index forwards. In addition to the table, it receives this start index as a parameter.

<!-- Metodin runko on seuraava: -->

The structure of the method is the following:

<!-- ```java
public static int pienimmanIndeksiAlkaen(int[] taulukko, int aloitusIndeksi) {
    // kirjoita koodia tähän
}
``` -->

```java
public static int indexOfSmallestFrom(int[] table, int startIndex) {
    // write your code here
}
```

<!-- Seuraava koodi esittelee metodin toimintaa: -->

The following code illustrates how the method words:

<!-- ```java
// indeksit:    0  1  2  3   4
int[] luvut = {-1, 6, 9, 8, 12};
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 0));
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 1));
System.out.println(Paaohjelma.pienimmanIndeksiAlkaen(luvut, 2));
``` -->

```java
// indices:       0  1  2  3   4
int[] numbers = {-1, 6, 9, 8, 12};
System.out.println(MainProgram.indexOfSmallestFrom(numbers, 0));
System.out.println(MainProgram.indexOfSmallestFrom(numbers, 1));
System.out.println(MainProgram.indexOfSmallestFrom(numbers, 2));
```

<sample-output>

0
1
3

</sample-output>

<!-- Esimerkissä ensimmäinen metodikutsu etsii pienimmän luvun indeksin aloittaen indeksistä 0. Indeksistä 0 alkaen pienin luku on -1, ja sen indeksi on 0. Toinen metodikutsu etsii pienimmän luvun indeksiä indeksistä 1 aloittaen. Tällöin pienin luku on 6, ja sen indeksi on 1. Kolmas kutsu etsii pienimmän luvun indeksiä aloittaen indeksistä 2. Indeksistä 2 alkaen pienin luku on 8, ja sen indeksi on 3. -->

In this example the first method call searches for the index of the smallest number, starting from index 0. Starting from index 0, the smallest number is -1 and its index is 0. The second method call searches for the index of the smallest value starting from index 1. In this case the smallest number is 6 and its index is 1. The third calls searches for the index of the smallest value starting at index 2. Then the smallest number is 8 and its index is 3.


<!-- <h2>Lukujen vaihtaminen</h2> -->

<h2>Swapping numbers</h2>

<!-- Tee luokkaan Paaohjelma luokkametodi `vaihda`, jolle annetaan taulukko ja kaksi sen indeksiä. Metodi vaihtaa indekseissä olevat luvut keskenään. -->

Create a class method `swap` in the class MainProgram. It receives as its parameters an array and two indices inside it. The method swaps the numbers in these indices with each other.

<!-- Metodin runko on seuraava: -->

The basic structure of the method is:

<!-- ```java
public static void vaihda(int[] taulukko, int indeksi1, int indeksi2) {
    // kirjoita koodia tähän
}
``` -->

```java
public static void swap(int[] array, int index1, int index2) {
    // write your code here
}
```

<!-- Seuraavassa estellään metodin toimintaa. Taulukon tulostamisessa käytetään apuna taulukon merkkijonoksi muotoilevaa `Arrays`-luokan `toString`-luokkametodia: -->

The following illustrates how to use the method. To print an array we take use of the `toString` class method of the class `Arrays`. It formats an array into an easily readable string.


<!-- ```java
int[] luvut = {3, 2, 5, 4, 8};

System.out.println(Arrays.toString(luvut));

Paaohjelma.vaihda(luvut, 1, 0);
System.out.println(Arrays.toString(luvut));

Paaohjelma.vaihda(luvut, 0, 3);
System.out.println(Arrays.toString(luvut));
``` -->

```java
int[] numbers = {3, 2, 5, 4, 8};

System.out.println(Arrays.toString(numbers));

MainProgram.swap(numbers, 1, 0);
System.out.println(Arrays.toString(numbers));

MainProgram.swap(numbers, 0, 3);
System.out.println(Arrays.toString(numbers));
```

<sample-output>
[3, 2, 5, 4, 8]
[2, 3, 5, 4, 8]
[4, 3, 5, 2, 8]
</sample-output>


<!-- <h2>Järjestäminen</h2> -->

<h2>Sorting</h2>


<!-- Nyt koossa on joukko hyödyllisiä metodeja, joiden avulla voimme toteuttaa järjestämisalgoritmin nimeltä valintajärjestäminen. -->

We have now assembled a set of useful methods. With their help, we can implement a sorting algorithm known by the name of selection sort.

<!-- Valintajärjestämisen idea on seuraava: -->

The idea of selection sort is:

<!-- - Siirretään taulukon pienin luku indeksiin 0. -->

- Move the smallest number in the array to index 0.

<!-- - Siirretään taulukon toiseksi pienin luku indeksiin 1. -->

- Move the second smallest number to index 1.


<!-- - Siirretään taulukon kolmanneksi pienin luku indeksiin 2. -->

- Move the third smalles number in the array to index 2.


<!-- - Jne. -->

- Etc.

<!-- Toisin sanoen: -->

In other words:

<!-- - Tarkastellaan taulukkoa indeksistä 0 alkaen. Vaihdetaan keskenään indeksissä 0 oleva luku sekä taulukon pienin luku indeksistä 0 alkaen.
- Tarkastellaan taulukkoa indeksistä 1 alkaen. Vaihdetaan keskenään indeksissä 1 oleva luku sekä taulukon pienin luku indeksistä 1 alkaen.
- Tarkastellaan taulukkoa indeksistä 2 alkaen. Vaihdetaan keskenään indeksissä 2 oleva luku sekä taulukon pienin luku indeksistä 2 alkaen.
- Jne. -->

- Examine the array starting from index 0. Swap the following two numbers with each other: the number at index 0, and the smallest number in the array starting from index 0.
- Examine the array starting from index 1. Swap the following two numbers with each other: the number at index 1, and the smallest number in the array starting from index 1.
- Examine the array starting from index 2. Swap the following two numbers with each other: the number at index 2, and the smallest number in the array starting from index 2.
- Etc.


<!-- Toteuta luokkaan Paaohjelma luokkametodi `jarjesta`, joka perustuu yllä olevaan ideaan. Metodissa on syytä olla silmukka, joka käy läpi taulukon indeksejä. Metodeista `pieninIndeksiAlkaen` ja `vaihda` on varmasti hyötyä. Tulosta myös taulukon sisältö ennen järjestämistä ja jokaisen kierroksen jälkeen, jotta voit varmistaa algoritmin toimivan oikein. -->

Implement a class method called `sort` based on the idea above in the class MainProgram. It should include a loop that goes through the indices of the array. Certainly the method `indexOfSmallestFrom` and `swap` will come in handy. Additionally, print the contents of the arrya before sorting and after every iteration of the loop to ensure that the algorithm works as you expect it to.

<!-- Metodin runko on seuraava: -->

The definition of the method looks like this:

<!-- ```java
public static void jarjesta(int[] taulukko) {

}
``` -->

```java
public static void sort(int[] array) {

}
```

<!-- Testaa metodin toimintaa ainakin seuraavalla esimerkillä: -->

Use at least the following example to test how the method functions:

<!-- ```java
int[] luvut = {8, 3, 7, 9, 1, 2, 4};
Paaohjelma.jarjesta(luvut);
``` -->

```java
int[] numbers = {8, 3, 7, 9, 1, 2, 4};
MainProgram.sort(numbers);
```

<!-- Ohjelman tulosteen tulisi olla seuraavanlainen. Huomaa että sinun tulee tulostaa taulukon sisältö jokaisen vaihtamisen jälkeen! -->

The output of the program should look like the print below. Observe that you must print the contents of the array after each swap!

<sample-output>
[8, 3, 7, 9, 1, 2, 4]
[1, 3, 7, 9, 8, 2, 4]
[1, 2, 7, 9, 8, 3, 4]
[1, 2, 3, 9, 8, 7, 4]
[1, 2, 3, 4, 8, 7, 9]
[1, 2, 3, 4, 7, 8, 9]
[1, 2, 3, 4, 7, 8, 9]
</sample-output>

<!-- Huomaat, miten taulukko tulee pikkuhiljaa järjestykseen alkaen alusta ja edeten loppua kohti. -->

Mark how the array becomes sorted little by little starting from the beginning and advancing towards the end of the array.

</programming-exercise>



<text-box variant='hint' name='Static vai ei'>

Kurssin alussa kaikissa metodeissa esiintyi määre `static`, mutta aloittaessamme olioiden käytön, tuon määreen käyttö jopa kiellettiin.

Javan metodit voidaan jakaa kahteen ryhmään `static`-määreen olemassaolon perusteella. Metodit joissa ei ole `static`-määrettä ovat **oliometodeja** (tunnetaan myös instanssimetodeina). Metodit joissa on `static`-määre ovat **luokkametodeja**.

Oliometodit ovat metodeja, jotka liittyvät olioihin, ja joiden koodissa voi käsitellä oliomuuttujia ja kutsua olion muita oliometodeja. Oliometodeissa on erityisesti pääsy `this`-määreeseen, joka on viite juuri metodia kutsuvaan olioon muuttujiin. Luokkametodeilla ei ole pääsyä `this`-määreeseen, jolloin niiden käytössä on vain ne muuttujat, jotka niille annetaan parametrina ja ne, jotka ne luovat.

*Todellisuudessa luokkametodit pääsevät myös mm. luokkamuuttujiin -- näitä ei kuitenkaan käsitellä tällä kurssilla.*

</text-box>


### Javan valmiit järjestämisalgoritmit

Java tarjoaa merkittävän määrän valmiita järjestysalgoritmeja. Taulukot voi järjestää (luonnolliseen järjestykseen) luokan `Arrays` tarjoamalla luokkametodilla `sort`, ja listat voi järjestää (luonnolliseen järjestykseen) luokan `Collections` tarjoamalla luokkametodilla `sort`.


```java
int[] luvut = {8, 3, 7, 9, 1, 2, 4};
System.out.println(Arrays.toString(luvut));
Arrays.sort(luvut);
System.out.println(Arrays.toString(luvut));
```

<sample-output>
[8, 3, 7, 9, 1, 2, 4]
[1, 2, 3, 4, 7, 8, 9]
</sample-output>


```java
ArrayList<Integer> luvut = new ArrayList<>();
luvut.add(8);
luvut.add(3);
luvut.add(7);
System.out.println(luvut);
Collections.sort(luvut);
System.out.println(luvut);
```

<sample-output>
[8, 3, 7]
[3, 7, 8]
</sample-output>


Valmiit järjestämisalgoritmit toimivat sekä alkeistyyppisille muuttujille, että joillekin Javan valmiille viittaustyyppisille muuttujille kuten String. Omien luokkiemme järjestämistä varten joudumme antamaan Javalle hieman lisävinkkejä, sillä luokat eivät sisällä tietoa siitä, miten niistä luodut oliot pitäisi järjestää. Palaamme omista luokista tehtyjen olioiden järjestämiseen ohjelmoinnin jatkokurssilla.


<programming-exercise name='Ready-made Sorting Algorithms' tmcname='part07-Part07_04.ReadymadeSortingAlgorithms'>

<!--Lisää luokkaan `Paaohjelma` seuraavat luokkametodit:

- `public static void jarjesta(int[] taulukko)` järjestää kokonaislukutaulukon.

- `public static void jarjesta(String[] taulukko)` järjestää merkkijonotaulukon.

- `public static void jarjestaLuvut(ArrayList<Integer> luvut)` järjestää lukuja sisältävän listan.

- `public static void jarjestaMerkkijonot(ArrayList<String> merkkijonot)` järjestää merkkijonoja sisältävän listan.

Hyödynnä metodien toteutuksessa Javan valmiita kirjastoja.-->

Add the following methods to the Main class:

- `public static void sort(int[] array)` that sorts an array of integers.

- `public static void sort(String[] array)` that sorts an array of strings.

- `public static void sortIntegers(ArrayList<Integer> integers)` that sorts a list of integers.

- `public static void sortStrings(ArrayList<String> strings)` that sorts a list of strings.

Be sure to use the ready-made Java libraries in your implementation.

</programming-exercise>


## Tiedon hakeminen

Tarkastellaan seuraavaksi tiedon hakemiseen tarkoitettuja algoritmeja.


### Peräkkäishaku


Peräkkäishaku on hakualgoritmi, joka etsii tietoa taulukosta käymällä taulukkoa läpi alkio alkiolta. Heti kun haettu alkio löytyy, sen indeksi palautetaan. Jos alkiota ei löydy, palautetaan tieto siitä ettei haettavaa alkiota löytynyt -- tämä kerrotaan tyypillisesti palauttamalla indeksin sijaan arvo `-1`.

```java
public class Algoritmit {

    public static int perakkaishaku(int[] taulukko, int haettava) {
        for (int i = 0; i < taulukko.length; i++) {
            if (taulukko[i] == haettava) {
                return i;
            }
        }

        return -1;
    }
}
```

Pahimmassa tapauksessa, eli tilanteessa missä alkiota ei lödy, algoritmi tekee taulukon koon verran vertailuja. Vaikkapa 10 miljoonaa arvoa sisältävässä taulukossa tämä tarkoittaa kymmentä miljoonaa vertailua. Jos tietoa haetaan useampia kertoja, kannattaa tehokkuutta yrittää parantaa.


### Binäärihaku (puolitushaku)

Kun tieto on järjestyksessä, hakeminen voidaan toteuttaa paljon peräkkäishakua tehokkaammin. Binäärihakualgoritmin idea aloittaa tiedon etsiminen taulukon (tai listan) keskimmäisestä indeksistä, verrata indeksissä olevaa arvoa haettuun arvoon, ja rajata tarvittaessa (eli mikäli haettavaa arvoa ei ole indeksissä) puolet tarkasteltavasta alueesta pois. Algoritmi esitellään seuraavassa slideshowssa.


<pdf-slideshow>

[a](../slideshows/binaarihaku.pdf)

</pdf-slideshow>

<br/>


<programming-exercise name='Hakemista' tmcname='osa07-Osa07_05.Hakemista'>

Tehtäväpohjassa on valmiina luokka `Kirja`, joka kuvaa numeerisen tunnuksen `id` ja nimen `nimi` sisältäviä olioita.

Tässä tehtävässä toteutetaan peräkkäishaku- ja binäärihakualgoritmi kirjojen hakemiseen niiden numeerisen tunnuksen perusteella. Tehtäväpohjassa on valmiina toteutettavien metodien nimet -- tällä hetkellä kumpikin metodeista palauttaa arvon `-1` -- sekä pääohjelma, jota voi käyttää metodien testaamiseen.

<h2>Peräkkäishaku</h2>

Peräkkäishakualgoritmi toimii siten, että se tarkastelee kutakin listassa tai taulukossa olevaa arvoa yksi kerrallaan, nollannesta indeksistä lähtien.

Toteuta luokkaan `Paaohjelma` metodi `public static int perakkaishaku(ArrayList<Kirja> kirjat, int haettavaId)`, joka hakee parametrina annetusta listasta kirjaa, jonka `id`-muuttujan arvo on sama kuin metodille parametrina annetun `haettavaId`-muuttujan arvo. Mikäli kirja löytyy, tulee metodin palauttaa kyseisen kirjan indeksi parametrina annetussa listassa. Mikäli kirjaa ei löydy, tulee metodin palauttaa arvo `-1`.


<h2>Binäärihaku</h2>

Toteuta luokkaan `Paaohjelma` metodi `public static int binaarihaku(ArrayList<Kirja> kirjat, int haettavaId)`, joka hakee parametrina annetusta listasta kirjaa, jonka `id`-muuttujan arvo on sama kuin metodille parametrina annetun `haettavaId`-muuttujan arvo. Mikäli kirja löytyy, tulee metodin palauttaa kyseisen kirjan indeksi parametrina annetussa listassa. Mikäli kirjaa ei löydy, tulee metodin palauttaa arvo `-1`.

Metodi tulee toteuttaa binäärihakuna, jolloin alkuoletuksena on se, että lista on järjestyksessä. Oleta lisäksi, että listan alkupäässä olevat `id`t ovat aina pienempiä kuin listan loppupäässä olevat `id`t.

Saat apuusi myös edellisessä esityksessä käytetyn binäärihaun idean sekä *pseudokoodin*, eli ohjelmointikielen kaltaisella kielellä kuvatun ohjelman kuvauksen.

Edellisessä esityksessä binäärihaun idea kuvattiin seuraavasti:

- Tietoa etsitään järjestyksessä olevasta taulukosta tai listasta.
- Hakeminen aloitetaan keskikohdasta.
- Mikäli tarkasteltavan keskikohdan arvo ei ole haettu arvo, rajataan haettavasta alueesta puolet pois ja siirrytään tarkastelemaan jäljelle jäävän alueen keskikohtaa.
- Mikäli tarkasteltavan keskikohdan arvo on haettu arvo, palautetaan tarkasteltavan keskikohdan indeksi.
- Mikäli tarkasteltavaa aluetta ei ole enää jäljellä (koko alue rajattu pois), palautetaan arvo -1, joka kuvaa ettei haettavaa arvoa löydy

Binäärihaun pseudokoodi on seuraavanlainen.

```code
// oletetaan, että käytössä on muuttuja haettava
// oletetaan, että käytössä on muuttuja lista
alku = 0 // listan nollas indeksi
loppu = koko(lista) - 1 // listan viimeinen indeksi

toista kunnes alku on suurempi kuin loppu:
    keski = (loppu + alku) / 2

    jos arvo kohdassa lista[keski] on haettava
        palauta muuttujan keski arvo

    jos arvo kohdassa lista[keski] on pienempi kuin haettava
        alku = keski + 1

    jos arvo kohdassa lista[keski] on suurempi kuin haettava
        loppu = keski - 1

palauta arvo -1
```

Huomaa, että kirjojen tapauksessa tarkastelet kirjojen `id`-muuttujien arvoja. Tämä tarkoittaa sitä, että sen sijaan, että käsittelet vain listan tietyssä indeksissä olevaa arvoa, tulee tehtävässä käsitellä tietyssä indeksissä olevan arvon `id`-muuttujaa.

</programming-exercise>


