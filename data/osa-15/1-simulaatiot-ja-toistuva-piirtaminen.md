---
path: '/osa-15/1-simulaatiot-ja-toistuva-piirtaminen'
title: 'Simulaatiot ja toistuva piirtäminen'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mitä simulaatiot ovat.
- Kertaat kaksiulotteisten taulukoiden käyttöä.
- Harjoittelet piirtämistä Canvas-elementille.
- Osaat luoda kaksiulotteisiin taulukoihin perustuvia simulaatioita.
- Tunnet yleisiä sääntöjä simulaatioiden toteuttamiseen.

</text-box>

<quiznator id="5cb5c0ef06d26046c3ea28c8"></quiznator>


Tietokonesimulaatioita käytetään tosielämän ilmiöiden mallintamiseen tietokoneella. Simulaation toteutus sisältää ilmiötä kuvaavan mallin luomisen (esimerkiksi säämalli) sekä mallin ajamisen eli simuloinnin. Tutustumme tässä muutamaan klassiseen tietokonesimulaatioon, jotka käyttävät kaksiulotteista taulukkoa.


## Lyhyt kertaus kaksiulotteisista taulukoista


Kaksiulotteiset taulukot esitellään muuttujatyypin sekä sitä seuraavan kahden hakasulun avulla (esim `int[][]`). Tätä seuraa muuttujan nimi sekä konkreettinen taulukko-olion luonti, esim `int[][] taulukko = new int[rivit][sarakkeet]`, jossa rivit ja sarakkeet ovat kokonaisluja.

```java
double[][] taulukko = new double[5][10];
```

Yllä luomme viisirivisen ja kymmensarakkeisen taulukon, jonka jokainen solu sisältää liukuluvun. Taulukon läpikäynti onnistuu for-toistolauseella.


```java
double[][] taulukko = new double[5][10];
System.out.println("rivi, sarake, arvo");
for (int rivi = 0; rivi < taulukko.length; rivi++) {
    for (int sarake = 0; sarake < taulukko[rivi].length; sarake++) {
        double arvo = taulukko[rivi][sarake];
        System.out.println("" + rivi + ", " + sarake + ", " + arvo);
    }
}
```

Yllä näytetään miten taulukon arvoihin päästään käsiksi. Taulukon arvojen asetus tapahtuu samalla tavalla. Alla olevassa esimerkissä taulukkon rivin 1 sarakkeeseen 2 asetetaan arvo `4.2`.


```java
double[][] taulukko = new double[5][10];
taulukko[1][2] = 4.2;
```


## Piirtäminen ja Canvas


Canvas-luokka tarjoaa piirtoalustan, johon voi piirtää Canvas-oliosta saatavan GraphicsContext-olion avulla. Animaatioissa ja simulaatioissa halutaan tyypillisesti piirtää jatkuvasti. Jatkuvasti piirtäminen -- tai oikeammin tietyn aikavälin jälkeen uudelleen piirtäminen -- tapahtuu [AnimationTimer](https://docs.oracle.com/javase/8/javafx/api/javafx/animation/AnimationTimer.html)-luokan avulla. AnimationTimer-luokka määrittelee metodin [handle](https://docs.oracle.com/javase/8/javafx/api/javafx/animation/AnimationTimer.html#handle-long-), joka luokkaa käyttävän ohjelmoijan tulee toteuttaa. Metodi saa parametrina nykyhetken nanosekunteina, jonka avulla voidaan vaikuttaa piirtovälien pituuteen. Samaa kuvaa ei esimerkiksi kannata piirtää käyttäjälle tuhatta kertaa sekunnissa, mutta toisaalta nopeasti liikkuvan kuvan päivittäminen käyttäjälle esimerkiksi kerran sekunnissa ei sekään ole toivottua.

Alla olevassa esimerkissä on ohjelma, jossa piirretään satunnaiseen kohtaan piste kymmenen kertaa sekunnissa.


```java
// pakkaus..

import java.util.Random;
import javafx.animation.AnimationTimer;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.layout.BorderPane;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

public class AnimaationAlku extends Application {

    @Override
    public void start(Stage ikkuna) {

        Canvas piirtoalusta = new Canvas(320, 240);
        GraphicsContext piirturi = piirtoalusta.getGraphicsContext2D();
        piirturi.setFill(Color.BLACK);

        BorderPane asettelu = new BorderPane();
        asettelu.setCenter(piirtoalusta);

        Random arpoja = new Random();

        new AnimationTimer() {
            long edellinen = 0;

            @Override
            public void handle(long nykyhetki) {
                if (nykyhetki - edellinen < 100000000) {
                    return;
                }

                int x = arpoja.nextInt(310);
                int y = arpoja.nextInt(230);

                piirturi.fillOval(x, y, 10, 10);

                this.edellinen = nykyhetki;
            }
        }.start();

        Scene nakyma = new Scene(asettelu);

        ikkuna.setScene(nakyma);
        ikkuna.show();
    }

    public static void main(String[] args) {
        launch(AnimaationAlku.class);
    }
}
```


Ohjelma toimii käynnistyessään seuraavasti. Huomaathan, että pisteet ovat satunnaisia, joten oma kokeilusi tuskin tuottaa täsmälleen samanlaista tulosta.


<img src="../img/material/gui-animaatio.gif" alt="Edellinen ohjelma toiminnassa. Kuvaan ilmestyy kymmenen pistettä sekunnissa."/>

&nbsp;

<programming-exercise name='Piirto-ohjelma' tmcname='osa14-Osa14_01.PiirtoOhjelma'>

Tehtäväpohjaan on toteutettu graafinen sovellus, joka sisältää kaksiulotteisen taulukon. Tehtävänäsi on muuttaa sovelluksen toimintaa siten, että kun käyttäjä painaa hiirtä sovelluksessa tai liikuttaa hiirtä kun nappi on pohjassa, ikkunaan piirretään.

Tee tätä varten kaksi asiaa: (1) muuta sovelluksessa olevan taulukon "piirrettava" arvoja sopivasti kun käyttäjä käyttää hiirtä, ja (2) piirrä komentoa `piirturi.fillRect(x, y, 2, 2)` käyttäen ne alkiot, joiden arvo on 1. Käytä koordinaatteina x, y taulukon indeksejä.

Kun sovellus toimii, voit käyttää sitä vaikkapa seuraavanlaisen taideteoksen tekemiseen.

<img src="../img/exercises/06-14-piirturi-ok.png" />

Tehtävässä ei ole testejä eli palauta se vasta kun sovellus toimii toivotulla tavalla.

</programming-exercise>

Silloin tällöin ohjelma halutaan toteuttaa siten, että uusi tila piirretään aina edellisen tilanteen päälle. Tällöin tapana on tyhjentää ruutu ennen uutta piirtämistä. Tämä onnistuu lisäämällä edelliseen ohjelmaan rivi `piirturi.clearRect(0, 0, 320, 240);` ennen handle-metodissa olevaa piirtokomentoa. Komento tyhjentäisi kohdasta (0, 0) lähtien 320 pikseliä leveän ja 240 pikseliä korkean suunnikkaan.


## Game of Life


<!-- [Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) on klassinen tietokonesimulaatio. Se toteutetaan kaksiulotteisen taulukon avulla, ja se noudattaa seuraavia sääntöjä: -->
[Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) is a computer simulation classic. It can be implemented using a two dimensional array, and it follows these rules:

<!-- 1. Jos elävän solun naapureina on alle kaksi elävää solua, se kuolee alikansoituksen takia. -->
<!-- 2. Jos elävän solun naapureina on kaksi tai kolme elävää solua, se jää henkiin. -->
<!-- 3. Jos elävän solun naapureina on yli kolme elävää solua, se kuolee ylikansoituksen takia. -->
<!-- 4. Jos kuolleen solun naapureina on tasan kolme elävää solua, se syntyy eli muuttuu eläväksi. -->

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

<!-- Naapurit ovat soluun koskettavia soluja. Naapuri koskettaa solua joko reunasta, (pohjoinen, itä, etelä, länsi) tai kulmasta (koillinen, kaakko, lounas, luode). -->
Neighbors of a cell are all cells which touch it. Neighbor can touch either the side of a cell (from north, south, east or west) or the corner of a cell (from north-west, north-east, south-west or south-east).

<!-- Game of Life ei sisällä liikkumissääntöjä, mutta se silti luo tilanteita, joissa erilaiset hahmot liikkuvat ruudulla. Alla olevalla videolla John Conway kertoo Game of Lifen kehittämisestä. -->
There are no movement rules in the Game of Life, but it creates situations, where different characters move about on the screen.
Below is a video where John Conway speaks about developing the Game of Life.

<youtube id="R9Plq-D1gEk"></youtube>


<programming-exercise name='Game of Life (2 parts)' tmcname='part14-Part14_02.GameOfLife'>

<!-- Tässä tehtävässä toteutetaan oleellisilta osin Game of Life-pelin säännöt. Toteutusta varten tehtäväpohjassa on luokka GameOfLife, joka sisältää kaksiulotteisen taulukon, sekä luokka GameOfLifeSovellus, jota voidaan käyttää pelin visualisointiin. -->
In this exercise we will implement the Game of Life. The exercise template contains the classes GameOfLife and GameOfLifeApplication.
The first class contains a two dimensional array, and the second class will be used to visualize the game.

<!-- <h2>Elossa olevien naapurien lukumäärä</h2> -->
<h2>Number of living neighbors</h2>

<!-- Täydennä luokassa GameOfLife olevaa metodia `public int numberOfLivingNeighbors(int[][] taulukko, int x, int y)` siten, että se laskee annetun x, y -koordinaatin elossa olevien naapureiden lukumäärän. Naapuri on elossa jos sen arvo on 1. -->
Complete the method `public int numberOfLivingNeighbors(int[][] cells, int x int y)`. The method should calculate the number of living neighbors for a cell at the given x and y coordinates.
A cell is alive if its value is 1.

<!-- Naapureita ovat kaikki ne alkiot, jotka ovat kulman tai sivun kautta yhteydessä alkioon. -->
A neighbor of a cell is any cell which touches either the side or the corner of the cell.

<!-- Huomaa, että metodin tulee varoa `ArrayIndexOutOfBounds`-virhettä. Indeksissä -1 ei esimerkiksi voi olla ketään. Vastaavasti taulukon leveyden tai korkeuden yli ei voi mennä (esim. `taulukko[taulukko.length][0]` tai `taulukko[0][taulukko[0].length]`). -->
Be mindful of the size of the array, and avoid getting the `ArrayIndexOutOfBounds` error.
For example there can be no cell at the index -1. Accordingly you cannot go over the height or the width of the array (for example `cells[cells.length][0]` or `cells[0][cells[0].length]`).

<!-- Voit kokeilla metodiasi muunmuassa seuraavilla esimerkeillä. -->
You can test your method like so:

```java
GameOfLife thisGameOfLife = new GameOfLife(3, 3);

int[][] cells = new int[3][3];
cells[0][0] = 1;
cells[0][1] = 1;
cells[1][1] = 1;
cells[2][2] = 1;

System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 0, 0));
System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 1, 0));
System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 1, 1));
System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 2, 2));
```

<sample-output>

2
3
3
1

</sample-output>

```java
GameOfLife thisGameOfLife = new GameOfLife(4, 4);

int[][] cells = {{1, 1, 1, 1}, {1, 1, 1, 1}, {1, 0, 1, 0}, {0, 1, 0, 1}};

System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 0, 0));
System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 1, 1));
System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 2, 2));
System.out.println(thisGameOfLife.numberOfLivingNeighbors(cells, 3, 3));
```

<sample-output>

3
7
5
1

</sample-output>


<!-- <h2>Kehittyminen</h2> -->
<h2>Evolution</h2>

<!-- Täydennä seuraavaksi GameOfLife-luokan metodia `public void kehity()` siten, että se käy yhden Game of Life -pelin askeleen. -->
Next complete the `public void evolve()` method in the GameOfLife class.
The method should complete one of the steps in the Game of Life.

<!-- Toteuta toiminnallisuus niin, että luot toisen taulukon, jonka koko on sama kuin alkuperäisen taulukon. Käy tämän jälkeen alkuperäistä taulukkoa läpi alkio alkiolta siten, että seuraat seuraavia sääntöjä: -->
Implement this functionality by creating a new array the size of the original array. Then go the original array through element be element so, that you follow these rules:

<!-- 1. Jos alkuperäisen taulukon alkion arvo on 1 ja sillä on alle kaksi elävää naapuria, kopioon asetetaan alkion arvoksi 0. -->
<!-- 2. Jos alkuperäisen taulukon alkion arvo on 1 ja sillä on kaksi tai kolme elävää naapuria, kopioon asetetaan alkion arvoksi 1. -->
<!-- 3. Jos alkuperäisen taulukon alkion arvo on 1 ja sillä on yli kolme elävää naapuria, kopioon asetetaan alkion arvoksi 0. -->
<!-- 4. Jos alkuperäisen taulukon alkion arvo on 0 ja sillä on tasan kolme elävää naapuria, kopioon asetetaan alkion arvoksi 1. -->
1. If the value of an element in the original array is 1 and it has less than two living neighbors, its value in the new array becomes 0.
2. If the value of an element in the original array is 1 and it has two or three living neighbors, its value in the new array becomes 1.
3. If the value of an element in the original array is 1 and it has more than three living neighbors, its value in the new array becomes 0.
4. If the value of an element in the original array is 0 and it has exactly three living neighbors, its value in the new array becomes 1.

<!-- Käytä naapureiden lukumäärän selvittämisessä edellisessä osassa tehtyä metodia. Kun olet käynyt koko taulukon läpi, vaihda kopio taulukon paikalle. -->
Use the method you implemented in part 1 to calculate the number of living neighbor for each element. When you have gone through the whole array, swap the new array with the original array.

<!-- Kokeile tämän jälkeen sovelluksen toimintaa graafisen käyttöliittymän kautta. Sovelluksen pitäisi käynnistyä -- yksi mahdollinen hetkellinen tila on seuraavanlainen. -->
Then you can test the application through the graphical UI. The Application should start --  below is an example of a possible view.

<img src="../img/exercises/06-15-gameoflife.png" width="600"/>

</programming-exercise>


<text-box variant='hint' name='Miksi taulukosta tehtiin kopio?'>

Game of Life -tehtävässä taulukosta tehtiin kopio, johon laskettiin sääntöjä noudattaen Game of Life -simulaation seuraavan tilanteen arvot. Mikäli taulukosta ei olisi tehty kopiota ja laskenta olisi tapahtunut suoraan alkuperäiseen taulukkoon, muuttaisivat välitulokset ohjelman toimintaa.

</text-box>



## Schellingin malli

[Thomas Schelling](https://en.wikipedia.org/wiki/Thomas_Schelling) on yhdysvaltalainen taloustieteilijä, joka esitti samankaltaisuuden hyväksyntää (tai toisaalta syrjintää) selittävän mallin. Malli perustuu ajatukselle, että ihmiset pysyvät paikallaan mikäli heillä on naapureina tarpeeksi samanmielisiä ihmisiä -- käänteisesti, ihmiset muuttavat pois mikäli he eivät ole tyytyväisiä naapureihinsa.


Tutustutaan mallin toimintaan tehtävän avulla.


<programming-exercise name='Schelling (2 osaa)' tmcname='osa14-Osa14_03.Schelling'>

Tässä tehtävässä pohditaan Schellingin mallia sekä kehitetään siihen liittyvää simulaatio-ohjelmaa.

Simulaation suoritus alkaa tilanteesta, jossa ihmiset ovat asetettu satunnaisesti asumaan.

<img src="../img/exercises/schelling-alku.png" alt="Tilanne, jossa ihmiset asuvat satunnaisesti."/>

&nbsp;

Kun simulaatio etenee, päädytään ennen pitkää tilanteeseen, jossa samankaltaiset ihmiset ovat muuttaneet samankaltaisten ihmisten luo.

<img src="../img/exercises/schelling-loppu.png" alt="Ihmiset ovat muuttaneet sopivampiin paikkoihin."/>

&nbsp;

Tehtäväpohjan mukana tulevasta ohjelmasta puuttuu muutamia oleellisia toiminnallisuuksia: (1) kartan tyhjennys, (2) tyhjien paikkojen etsiminen, sekä (3) tyytymättömien henkilöiden tunnistaminen. Tutustu tehtäväpohjan ohjelmaan ennen aloittamista.

Siinä missä Game of Life -tehtävässä maailmaa kuvaava taulukko oli upotettu osaksi mallia (luokka GameOfLife), tässä tehtävässä taulukko on eriytetty erilliseksi luokakseen.


<h2>Kartan tyhjentäminen ja tyhjien paikkojen etsiminen</h2>

Malli käyttää kaksiulotteista taulukkoa. Kohdassa (x, y) oleva arvo 0 kuvaa tyhjää paikkaa ja luvut 1-5 kuvaavat eri ryhmiä.

Toteuta ensin luokan `Eriytymismalli` metodiin `public void tyhjenna()` toiminnallisuus, joka asettaa jokaisen solun arvoksi 0.

Lisää tämän jälkeen metodiin `public ArrayList<Piste> tyhjatPaikat()` toiminnallisuus, joka tunnistaa tyhjät paikat (solut, joissa on arvo 0), luo jokaisesta Piste-olion, ja palauttaa ne listana. Huomaa, että käytössä olevassa hajautustaulussa ensimmäinen ulottuvuus kuvaa x-koordinaattia, ja toinen y-koordinaattia (taulukko.hae(x, y)).


<h2>Tyytymättömien hakeminen</h2>

Mallille voidaan asettaa parametri `tyytyvaisyysraja`. Tyytyväisyysrajalla kuvataan samaan ryhmään kuuluvien naapureiden minimimäärää, jonka täyttyessä henkilö on tyytyväinen sijaintiinsa. Jos ruudussa (x, y) olevan henkilön naapureista on samankaltaisia yhtä paljon tai yli `tyytyvaisyysraja`n, on henkilö tyytyväinen. Muissa tapauksissa henkilö on tyytymätön.

Naapureista tulee tarkastella kaikkia ruudun vieressä olevia ruutuja. Alueen ulkopuolella olevat ruudut (esim. -1, 0) tulee käsitellä tyhjänä ruutuna (ei samankaltainen).

Toteuta metodi `public ArrayList<Piste> haeTyytymattomat()`, joka palauttaa tyytymättömät listana.

*Vaikka karttamme on suorakulmio, voisi sen yhtä hyvin piirtää vaikkapa Helsingin muotoiseksi. Osa alueesta voisi olla myös esimerkiksi vettä, johon ei voisi muuttaa ymym.*

</programming-exercise>


## Yleisiä sääntöjä simulaation toteuttamiseen

Simulaatioita toteuttaessa on muutamia yleisiä sääntöjä. Simulaatio perustuu jonkinlaiseen malliin, joka on kuvaus (tosielämän) ilmiöstä. Tämä kuvaus on tyypillisesti vaillinainen, sillä ilmiön oleelliset osat pyritään irrottamaan muista oleellisista osista.

Kun ilmiötä mallinnetaan, kannattaa aloittaa muutamasta muuttujasta. Esimerkiksi rokotteiden hyötyjä ja haittoja voisi tarkastella ensin pitämällä kirjaa (1) rokotetuista, (2) rokottamattomista, ja (3) sairastuneista. Yksinkertaisessa mallissa rokottamattomista satunnaiset sairastuvat, jonka lisäksi sairastuneiden vieressä olevat saattavat sairastua jonkinlaisella todennäköisyydellä. Tämä todennäköisyys riippuu taudista, ja se kannattaisi määritellä parametrina mallille -- aivan kuten se, kuinka lähellä taudille altistuvan tulee olla jotta tauti voi tarttua.

Kun mallista on olemassa yksinkertainen versio, voi sitä täydentää. Rokotemallissa mukaan voisi tuoda tiedon tervehtymisestä -- sairaat tervehtyvät tietyllä todennäköisyydellä, sekä tiedon jälkitaudeista -- esimerkiksi noin 5% tuhkarokkoon sairastuneista saa keuhkokuumeen, joista osalla tauti saattaa johtaa kuolemaan. Mallia voisi jatkaa esimerkiksi lisäämällä tiedon henkilöiden iästä -- taudit vaikuttavat eri ikäisiin eri tavalla: luonnollisesti myös rokottamattomat vauvat ovat joillekin taudeille alttiimpia.

Rokotemallin totetus jääköön kuitenkin harrastuneisuuden varaan.

Yksinkertaisella mallilla aloittaminen sekä sen täydentäminen on ensimmäinen sääntö simulaatioiden toteuttamiseen. Toinen sääntö on käyttöliittymän ja mallin eriyttäminen. Edellä nähdyissä tehtävissä graafinen käyttöliittymä oli erillään mallista -- mikäli mallit olisivat olleet osana käyttöliittymää, olisi niiden ylläpito ja muokkaaminen ollut monimutkaisempaa.

Kolmas sääntö liittyy mallin jakamisen osiin tarvittaessa. Malleissa, joissa seuraava askel on riippuvainen edellisestä askeleesta on mahdollisuus siihen, että seuraavan vaiheen laskenta vaikuttaa edelliseen vaiheeseen. Esimerkiksi, mikäli Game of Lifessä olisi käytetty vain yhtä taulukkoa mallin ylläpitoon, ei sovellus toimisi halutulla tavalla sillä taulukkoon lisättävät uudet juuri lasketut arvot vaikuttaisivat niiden viereisten arvojen laskentaan.

Tarkemmin ottaen, edellä kuvatut säännöt eivät rajaudu simulaatioiden rakentamiseen vaan ne ovat yleisiä ohjelmistojen kehittämiseen liittyviä sääntöjä. Olemme koko kurssin ajan pyrkineet lähtemään liikenteeseen pienestä ratkaisten aina yhden ongelman kerrallaan. Vastaavasti olemme pyrkineet tilanteeseen, jossa sovelluslogiikka ja käyttöliittymä on erillään. Tämä mahdollistaa sekä sovelluslogiikan siirtämisen toiseen käyttöliittymään että käyttöliittymän helpomman muokkaamiseen. Samalla tavalla myös ohjelmistoja jaetaan pienempiin osiin, jolloin vältetään virheiden tekemistä ja helpotetaan sovellusten testaamista.


<programming-exercise name='Hiekkaranta (3 osaa)' tmcname='osa14-Osa14_04.Hiekkaranta'>


Tässä tehtävässä luodaan [falling sand game](https://en.wikipedia.org/wiki/Falling-sand_game)-tyyppinen sovellus, jota käytetään erilaisten aineiden simulointiin. Ohjelmassamme simuloidaan hiekan ja veden käyttäytymistä. Lopullisen sovelluksen toiminta on seuraavanlainen.

<img src="../img/material/gui-simulaatio.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta." />


*Tehtävässä käytetään `enum`-tyyppistä luokkaa `Tyyppi`. Javassa ohjelmoija voi määritellä rajatulle määrälle käsitteitä `enum`-tyyppisen luokan, jossa näille käsitteille annetaan nimi. Luokka on seuraavanlainen.*


```java
package hiekkaranta;

public enum Tyyppi {
    TYHJA, METALLI, HIEKKA, VESI;
}
```

Enum-muuttujia käytetään esimerkiksi seuraavasti.

```java
Tyyppi t = Tyyppi.TYHJA;
if (t == Tyyppi.TYHJA) {
    System.out.println("Tyhjää täynnä.");
}

if (t == Tyyppi.HIEKKA) {
    System.out.println("Hiekalta näyttää.");
}

Tyyppi[] taulukko = new Tyyppi[10];
taulukko[0] = Tyyppi.VESI;
System.out.println(taulukko.length);
```

Tehtäväpohjassa on annettu valmiina käyttöliittymä simulaatiolle. Käyttöliittymä sisältää piirtoalustana käytetyn Canvas-olion sekä simulaatioon lisättävien elementtien valintaan käytetyt napit.


<h2>Simulaation alkupalat</h2>

Täydennä pakkauksen hiekkaranta luokkaa Simulaatio seuraavasti. Luokalla Simulaatio tulee olla seuraavat konstruktorit ja metodit. Käytä luokassa hyödyksi valmista enum-luokkaa Tyyppi, ja toteuta simulaation sisäinen tiedon esitys kaksiulotteisena taulukkona `Tyyppi[][]`.

- Konstruktori `public Simulaatio(int leveys, int korkeus)` luo annetun levyisen ja korkuisen simulaation. Jokaisen kohdan arvon tulee olla aluksi `Tyyppi.TYHJA`.

- Metodi `public void lisaa(int x, int y, Tyyppi tyyppi` asettaa annettuun kohtaan annetun tyyppisen elementin. Tyyppi on joko `Tyyppi.TYHJA`, `Tyyppi.METALLI`, `Tyyppi.HIEKKA` tai `Tyyppi.VESI`.

- Metodi `public Tyyppi sisalto(int x, int y)` palauttaa annetussa kohdassa olevan sisällön. Vastaus on joko Tyyppi.TYHJA, Tyyppi.METALLI, Tyyppi.HIEKKA tai Tyyppi.VESI. Jos kohtaan ei ole lisätty mitään arvoa, tyyppi on Tyyppi.TYHJA. Jos käyttäjä kysyy tietoa alueen ulkopuolelta, palauta Tyyppi.METALLI.

- Metodi `public void paivita()` päivittää simulaatiota yhden askeleen. Päivitystoiminnallisuuden toteutus aloitetaan tehtävän myöhemmissä osassa.


Kun metodit toimivat, sovelluksen toiminta on seuraava.


<img src="../img/material/gui-simulaatio-metalli.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta." />



<h2>Hiekka</h2>


Muokkaa Simulaatio-luokan metodia paivita. Metodin paivita tulee toimia siten, että se tarkistaa jokaiselle hiekkaa sisältävälle kohdalle kohdan alla olevat kolme vaihtoehtoa (lounas, etelä, kaakko). Jos joku vaihtoehdoista on tyhjä, hiekka siirretään alaspäin tyhjään kohtaan. Mikäli useampi kuin yksi em vaihtoehdoista on tyhjiä, tee valinta satunnaisesti tyhjien vaihtoehtojen välillä.

Satunnaisuutta ohjelmaan saat `Random`-luokan avulla.

Huom! Toteuta simulaatio siten, että y-koordinaatti on "käänteinen". Simulaation sisällä y-koordinaatin kasvatus tarkoittaa alaspäin menoa, ja toisaalta y-koordinaatin pienennys ylöspäin menoa. Tämä auttaa piirtämisessä, sillä piirtäessä y-koordinaatti kasvaa alaspäin mennessä.

<img src="../img/material/gui-simulaatio-metalli-ja-hiekka.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta. Kuvassa hiekka toimii metallin kanssa." />



<h2>Vesi</h2>


Muokkaa tämän jälkeen Simulaatio-luokan metodia paivita siten, että se siirtää kutsun yhteydessä vettä alaspäin *jos* joku veden alapuolella olevista kohdista (lounas, etelä, kaakko) on tyhjä. Jos yksikään kohdista ei ole tyhjiä, mutta jommalla kummalla laidalla on sijaa, siirretään vettä sivulle.

Muokkaa loputa sovellusta siten, että hiekka syrjäyttää veden. Kun lisäät hiekkaa, veden tulee siis väistää hiekkaa. Toteuta väistäminen siten, että hiekka ja vesi vaihtaa paikkaansa.

<img src="../img/material/gui-simulaatio.gif" alt="Esimerkki hiekkaranta-simulaation toiminnasta." />


Kun olet saanut kaikki neljännentoista osan tehtävät valmiiksi, voit palauta tähän tehtävään ja lähteä toteuttamaan uusia toiminnallisuuksia. Miten toteuttaisit esimerkiksi laavan?

</programming-exercise>

