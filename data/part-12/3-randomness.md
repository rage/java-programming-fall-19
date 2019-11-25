---
path: '/part-12/3-randomness'
title: 'Randomness'
hidden: false
---


<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät miten satunnaislukuja luodaan ja tiedät joitakin tilanteita missä satunnaislukuja tarvitaan.
- Osaat käyttää Javan valmista Random-luokkaa satunnaislukujen luomiseen.

</text-box>

Satunnaisuutta tarvitaan esimerkiksi salausalgoritmeissa, koneoppimisessa sekä tietokonepelien ennustettavuuden vähentämisessä. Satunnaisuutta mallinnetaan käytännössä satunnaislukujen avulla, joiden luomiseen Java tarjoaa valmiin `Random`-luokan. Random-luokasta voi tehdä olion jota voi käyttää seuraavalla tavalla.


```java
import java.util.Random;

public class Arvontaa {
    public static void main(String[] args) {
        Random arpoja = new Random(); // luodaan apuväline arpoja

        for (int i = 0; i < 10; i++) {
            // Arvotaan ja tulostetaan satunnainen luku
            int luku = arpoja.nextInt(10);
            System.out.println(luku);
        }
    }
}
```

Yllä olevassa esimerkissä luodaan ensin `Random`-luokasta olio. Random-olio tarjoaa metodin `nextInt`, jolle annetaan parametrina kokonaisluku. Metodi palauttaa satunnaisen kokonaisluvun väliltä `[0,kokonaisluku[` eli *0..(annettu kokonaisluku - 1)*.

Ohjelman tuottama tulostus ei ole aina sama. Yksi mahdollinen tulostusesimerkki on seuraava:

<sample-output>

2
2
4
3
4
5
6
0
7
8

</sample-output>


<!-- <programming-exercise name='Lukuja' tmcname='osa12-Osa12_06.Lukuja'> -->
<programming-exercise name='Numbers' tmcname='part12-Part12_06.Numbers'>

<!-- Kirjoita ohjelma, joka kysyy käyttäjältä tulostettavien satunnaislukujen määrän ja tulostaa tämän jälkeen luvut. Tulostettavien lukujen tulee olla välillä `[0, 10]`. Alla muutamia esimerkkejä. -->

Write a program that prompts the user for how many random numbers should be generated and then prints the numbers. The printed numbers should be within the range `[0, 10]`. Below are some examples.

<!-- <sample-output>

Montako satunnaislukua tulostetaan?
**4**
9
1
4
3

</sample-output> -->

<sample-output>

How many random numbers should be printed?
**4**
9
1
4
3

</sample-output>


<!-- <sample-output>

Montako satunnaislukua tulostetaan?
**8**
9
6
0
9
10
7
3
3

</sample-output> -->

<sample-output>

How many random numbers should be printed?
**8**
9
6
0
9
10
7
3
3

</sample-output>

</programming-exercise>


Metodin `nextInt` avulla pystyy luomaan hyvin monipuolista satunnaisuutta. Ohjelmoija saattaisi esimerkiksi haluta, että ohjelman ilmoittama lämpötila on satunnainen ja väliltä [-30,50]. Tällöin ratkaisu on arpoa lukuja nollan ja kahdeksankymmenen väliltä ja miinustaa arvotusta luvusta 30.


```java
Random arpoja = new Random();
int lampotila = arpoja.nextInt(81) - 30;
System.out.println(lampotila);
```

<!-- <programming-exercise name='Die' tmcname='osa12-Osa12_07.Noppa'> -->
<programming-exercise name='Die' tmcname='part12-Part12_07.Die'>

<!-- Tehtäväpohjassa on luokka `Noppa`, jonka runko on seuraava: -->
The exercise template contains a class `Die`, which has the following body:

<!-- ```java
import java.util.Random;

public class Noppa {
    private Random random;
    private int tahkojenMaara;

    public Noppa(int tahkojenMaara) {
        this.random = new Random();
        // Alusta oliomuuttuja tahkojenMaara tässä
    }

    public int heita() {
        // arvo täällä luku jonka tulee olla yhdestä tahkojen määrään
        // ja palauta se
    }
}
``` -->

```java
import java.util.Random;

public class Die {
    private Random random;
    private int numberOfFaces;

    public Die(int numberOfFaces) {
        this.random = new Random();
        // Initialize the value of numberOfFaces here
    }

    public int throwDie() {
        // generate a random number which may be any number
        // between one and the number of faces, and then return it
    }
}
```

<!-- Muokkaa luokkaa siten, että sen konstruktori`Noppa(int tahkojenMaara)` luo uuden noppa-olion annetulla nopan tahkojen (eri oman numeronsa sisältämien "puolien") määrällä. Muokkaa myös metodia `heita` siten, että se antaa satunnaisen nopanheiton tuloksen, jonka arvon tulee olla väliltä `1...tahkojen määrä`. -->

Modify the class, such that the constructor `Die(int numberOfFaces)` creates a new die-object with the given number of faces (i.e. the number of "sides" with a number). Also, modify the method `throwDie` so it returns the result of a random throw of the die, which should be a value withing the range `1 ... number of faces`.

<!-- Seuraavassa noppaa testaava pääohjelma: -->
The following is a main program for testing the die:


<!-- ```java
public class Ohjelma {
    public static void main(String[] args) {
        Noppa noppa = new Noppa(6);

        for (int i = 0; i < 10; i++) {
            System.out.println(noppa.heita());
        }
    }
}
``` -->

```java
public class Program {
    public static void main(String[] args) {
        Die die = new Die(6);

        for (int i = 0; i < 10; i++) {
            System.out.println(die.throwDie());
        }
    }
}
```

<!-- Tulostus voisi olla esimerkiksi seuraava: -->
The output could be as follows:

<sample-output>

1
6
3
5
3
3
2
2
6
1

</sample-output>

</programming-exercise>


Random-luokasta tehdyn olion kautta päästään käsiksi myös satunnaisiin liukulukuihin, joita käytetään muunmuassa todennäköisyyslaskennan yhteydessä; tietokoneilla todennäköisyyksiä simuloidaan yleensä väliltä [0..1] olevilla luvuilla.

Random-oliolta satunnaisia liukulukuja saa metodilla `nextDouble`. Tarkastellaan seuraavia säämahdollisuuksia:

- Sataa räntää todennäköisyydellä 0.1 (10%)
- Sataa lunta todennäköisyydellä 0.3 (30%)
- Aurinko paistaa todennäköisyydellä 0.6 (60%)

Luodaan edellä olevista arvioista sääennustaja.

```java
import java.util.ArrayList;
import java.util.Random;

public class SaaEnnustaja {
    private Random random;

    public SaaEnnustaja() {
        this.random = new Random();
    }

    public String ennustaSaa() {
        double todennakoisyys = this.random.nextDouble();

        if (todennakoisyys <= 0.1) {
            return "Sataa räntää";
        } else if (todennakoisyys <= 0.4) { // 0.1 + 0.3
            return "Sataa lunta";
        } else { // loput, 1.0 - 0.4 = 0.6
            return "Aurinko paistaa";
        }
    }

    public int ennustaLampotila() {
        return (int) (4 * this.random.nextGaussian() - 3);
    }
}
```

Metodi `ennustaLampotila` on monella tapaa mielenkiintoinen. Metodin sisällä tehtävä kutsu `this.random.nextGaussian()` on tavallinen metodikutsu, jonka kaltaisia olemme nähneet aikaisemminkin. Kiinnostavaa tässä `Random`-luokan ilmentymän tarjoamassa metodissa on se, että metodin palauttama luku on normaalijakautunut (normaalijakautuneilla luvuilla voi kuvata esimerkiksi ihmisten pituuksia ja painoja -- jos et koe mielenkiintoa satunnaisuuden eri lajeihin se ei haittaa!).


```java
public int ennustaLampotila() {
    return (int) (4 * this.random.nextGaussian() - 3);
}
```

Edellisessä esimerkissä käytetään eksplisiittistä tyyppimuunnosta liukulukujen muuntamiseen kokonaisluvuiksi `(int)`. Vastaavalla menetelmällä voidaan muuttaa myös kokonaislukuja liukuluvuiksi kirjoittamalla `(double) kokonaisluku`

Luodaan vielä pääohjelma josta luokkaa `SaaEnnustaja` käytetään.

```java
// importit

public class Ohjelma {

    public static void main(String[] args) {
        SaaEnnustaja ennustaja = new SaaEnnustaja();

        // tallennetaan päivät listalle
        ArrayList<String> paivat = new ArrayList<>();
        paivat.add("Ma");
        paivat.add("Ti");
        paivat.add("Ke");
        paivat.add("To");
        paivat.add("Pe");
        paivat.add("La");
        paivat.add("Su");

        System.out.println("Seuraavan viikon sääennuste:");

        for (String paiva: paivat) {
            String saaEnnuste = ennustaja.ennustaSaa();
            int lampotilaEnnuste = ennustaja.ennustaLampotila();

            System.out.println(paiva + ": " + saaEnnuste + " " + lampotilaEnnuste + " astetta.");
        }
    }
}
```

Ohjelman tulostus voisi olla esimerkiksi seuraavanlainen:

<sample-output>

Seuraavan viikon sääennuste:
Ma: Sataa lunta 1 astetta.
Ti: Sataa lunta 1 astetta.
Ke: Aurinko paistaa -2 astetta.
To: Aurinko paistaa 0 astetta.
Pe: Sataa lunta -3 astetta.
La: Sataa lunta -3 astetta.
Su: Aurinko paistaa -5 astetta

</sample-output>

<!-- <programming-exercise name='Lottoarvonta' tmcname='osa12-Osa12_08.Lottoarvonta'> -->

<programming-exercise name='Lottery' tmcname='part12-Part12_08.Lottery'>

<!-- Tehtävänäsi on täydentää luokkaa `Lottorivi`, joka arpoo viikon lottonumerot. Lottonumerot ovat väliltä 1--40 ja niitä arvotaan 7. Lottorivi koostuu siis seitsemästä eri numerosta väliltä 1--40. -->

Your assignment is to complete the class `LotteryRow`, which is used to draw the week's winning numbers. The numbers are in range 1--40, and 7 numbers will be drawn in total. In other words, a lottery row consists of seven different numbers that are all in range 1--40.

<!-- Luokalle toivotaan seuraava toiminnot: -->

We wish to implement the following functions in the class:

<!-- - konstruktori `Lottorivi` luo uuden Lottorivi-olion joka sisältää uudet, arvotut numerot -->

- the constructor `LotteryRow` creates a new LotteryRow object that contains new randomized numbers.

<!-- - metodi `numerot` palauttaa tämän lottorivin lottonumerot -->

- the method `numbers` returns the drawn lottery numbers of this lottery row

<!-- - metodi `sisaltaaNumeron` kertoo onko arvotuissa numeroissa annettu numero -->

- the method `containsNumber` tells whether the given number is included in the drawn numbers

<!-- - metodi `arvoNumerot` arpoo riville uudet numerot -->

- the method `randomizeNumbers` randomizes new numbers for the lottery row.

<!-- Luokan runko on seuraava: -->

The basic structure of the class is as follows:

<!-- ```java
import java.util.ArrayList;
import java.util.Random;

    public class LottoRivi {
    private ArrayList<Integer> numerot;

    public LottoRivi() {
        this.arvoNumerot();
    }

    public ArrayList<Integer> numerot() {
        return this.numerot;
    }

    public boolean sisaltaaNumeron(int numero) {
        // Testaa tässä onko numero jo arvottujen numeroiden joukossa
        return false;
    }

    public void arvoNumerot() {
        // alustetaan lista numeroille
        this.numerot = new ArrayList<>();
        // Kirjoita numeroiden arvonta tänne käyttämällä metodia sisaltaaNumeron()
    }

    public boolean equals(Object toinen) {
        return false;
    }
}
``` -->

```java
import java.util.ArrayList;
import java.util.Random;

    public class LotteryRow {
    private ArrayList<Integer> numbers;

    public LotteryRow() {
        this.randomizeNumbers();
    }

    public ArrayList<Integer> numbers() {
        return this.numbers;
    }

    public boolean containsNumber(int number) {
        // Tests whether the number is already among the randomized numbers
        return false;
    }

    public void randomizeNumbers() {
        // initialize the list for numbers
        this.numbers = new ArrayList<>();
        // Implement the randomization of the numbers by using the method containsNumber() here
    }

    public boolean equals(Object other) {
        return false;
    }
}
```

<!-- Tehtäväpohjan mukana tulee seuraava pääohjelma: -->

The following main program is supplied in the exercise base:


<!-- ```java
import java.util.ArrayList;

public class Ohjelma {
    public static void main(String[] args) {
        Lottorivi rivi = new Lottorivi();
        ArrayList<Integer> lottonumerot = rivi.numerot();

        System.out.println("Lottonumerot:");
        for (int numero: lottonumerot) {
            System.out.print(numero + " ");
        }

        System.out.println("");
    }
}
``` -->

```java
import java.util.ArrayList;

public class Program {
    public static void main(String[] args) {
        LotteryRow row = new LotteryRow();
        ArrayList<Integer> lotteryNumbers = row.numbers();

        System.out.println("Lottery numbers:");
        for (int number: lotteryNumbers) {
            System.out.print(number + " ");
        }

        System.out.println("");
    }
}
```

<!-- Ohjelman mahdollisia tulostuksia ovat seuraavat: -->

Here are a few possible outputs of the program:


<!-- <sample-output>

Lottonumerot:
3 5 10 14 15 27 37

</sample-output> -->

<sample-output>

Lottery numbers:
3 5 10 14 15 27 37

</sample-output>

<!-- <sample-output>

Lottonumerot:
2 9 11 18 23 32 34

</sample-output> -->

<sample-output>

Lottery numbers:
2 9 11 18 23 32 34

</sample-output>

<!-- **Huom!** Sama numero saa esiintyä lottorivissä vain kerran. Lottorivin numeroiden ei tarvitse olla järjestyksessä. -->

**NB!** The same number can only appear once in a lottery row. The numbers don't need to be ordered.

</programming-exercise>


<text-box variant='hint' name='Lukujen satunnaisuudesta'>

Tietokoneiden toiminta on ennustettavissa sillä ne suorittavat niille annettuja komentoja orjallisesti. Ovatko siis tietokoneen luomat luvut todellisuudessa satunnaisia?

Tietokoneohjelmissa käytetyt satunnaisluvut ovat tyypillisesti pseudosatunnaislukuja, eli ne vaikuttavat satunnaisluvuilta, mutta seuraavat todellisuudessa jonkinlaista algoritmisesti luotua toistuvaa lukusarjaa. Suurimmalle osalle tietokoneohjelmista pseudosatunnaisluvut ovat riittävän hyviä -- esimerkiksi youtube-videoiden satunnaisessa toistossa normaali käyttäjä tuskin huomaa eroa. Toisaalta, jos satunnaislukuja käytetään tieteelliseen laskentaan, heikosti toimivat pseudosatunnaislukuja luovat algoritmit saattavat jopa johtaa tulosten kyseenalaistamiseen. Eräs esimerkki tällaisesta on hetken 1960-luvulla käytössä ollut IBM:n <a href="https://en.wikipedia.org/wiki/RANDU" target="_blank" norel>RANDU</a>.

<br/>

Kaikki tietokoneohjelmien satunnaisuus ei kuitenkaan ole pseudosatunnaisuutta. Vahvempaan satunnaisuuteen pyrkivät ohjelmat hyödyntävät muunmuassa jonkinlaisia tosielämän satunnaiseksi ajateltuja ilmiöitä satunnaislukujen luomiseen. Tällaisia ilmiöitä ovat esimerkiksi avaruussäteily tai vaikkapa <a href="https://www.wired.com/2003/08/random/" target="_blank" norel>laavalamppujen toiminta</a>.

<br/>

Lisää aiheesta osoitteessa <a href="https://www.random.org/randomness/" target="_blank" norel>https://www.random.org/randomness/</a>.

</text-box>
