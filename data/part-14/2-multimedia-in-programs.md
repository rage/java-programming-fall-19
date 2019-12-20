---
path: '/part-14/2-multimedia-in-programs'
title: 'Multimedia in programs'
hidden: false
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tunnet menetelmiä multimedian käyttämiseen graafisissa käyttöliittymissä.
- Osaat piirtää graafiseen käyttöliittymään.
- Osaat näyttää kuvan graafisessa käyttöliittymässä.
- Osaat soittaa ääniä graafisessa käyttöliittymässä.

</text-box>


Tutustutaan seuraavaksi lyhyesti multimedian käyttöön JavaFX-sovelluksissa.


## Piirtäminen

JavaFX-käyttöliittymäkirjastossa piirtämiseen käytetään [Canvas](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/canvas/Canvas.html)-oliota. Canvas-olio edustaa tyhjää taulua, johon voi piirtää. Piirtäminen tapahtuu Canvas-oliolta saatavalla [GraphicsContext](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/canvas/GraphicsContext.html)-oliolla.


Alla olevassa esimerkissä on luotu yksinkertainen piirto-ohjelma. Ohjelmassa luodaan 640 pikseliä leveä ja 480 pikseliä korkea piirtoalusta, joka asetetaan BorderPane-asettelun keskelle. Tämän lisäksi luodaan piirtovärin valintaan käytettävä [ColorPicker](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/ColorPicker.html)-olio, jolta saa tietoonsa kullakin hetkellä valittuna olevan värin. Värin valitsin asetetaan BorderPane-asettelun oikealle laidalle. Piirtoalustaan lisätään hiiren liikkumista kuunteleva tapahtuman käsittelijä. Kun hiirtä liikutetaan nappi pohjassa (onMouseDragged), kutsutaan GraphicsContext-olion värin asetusmetodia sekä piirretään hiiren kohtaan pieni ympyrä.

```java
// pakkaus

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.canvas.Canvas;
import javafx.scene.canvas.GraphicsContext;
import javafx.scene.control.ColorPicker;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

public class MiniPaint extends Application {

    @Override
    public void start(Stage ikkuna) {

        Canvas piirtoalusta = new Canvas(640, 480);
        GraphicsContext piirturi = piirtoalusta.getGraphicsContext2D();

        ColorPicker varinValitsin = new ColorPicker();

        BorderPane asettelu = new BorderPane();
        asettelu.setCenter(piirtoalusta);
        asettelu.setRight(varinValitsin);

        piirtoalusta.setOnMouseDragged((event) -> {
            double kohtaX = event.getX();
            double kohtaY = event.getY();
            piirturi.setFill(varinValitsin.getValue());
            piirturi.fillOval(kohtaX, kohtaY, 4, 4);
        });

        Scene nakyma = new Scene(asettelu);

        ikkuna.setScene(nakyma);
        ikkuna.show();
    }

    public static void main(String[] args) {
        launch(MiniPaint.class);
    }
}
```


Sovellus näyttää seuraavanlaiselta. Alla sovellusta on käytetty jo hieman piirtämiseen.


<img src="../img/material/gui-paint.png" alt="Yksinkertainen piirto-ohjelma. Käyttäjä voi piirtää pitämällä hiirtä pohjassa. Oikeassa laidassa on värin valintaan käytettävä ColorPicker-olio."/>


<!-- <programming-exercise name='Hymiö' tmcname='osa14-Osa14_06.Hymio'> -->

<programming-exercise name='Smiley' tmcname='part14-Part14_06.Smiley'>

<!-- Luo tehtäväpohjassa olevaan luokkaan graafinen käyttöliittymä. Lisää graafiseen käyttöliittymään asettelusta vastaava BorderPane-olio. Lisää BorderPanen keskellä Canvas-olio. Piirrä tämän jälkeen Canvas-olioon liittyvän GraphicsContext-olion avulla hymiö. Käytä taustan värinä valkoista (Color.WHITE) ja hymiön värinä mustaa (Color.BLACK). -->

Create a graphical user interface into the class that is supplied with the exercise base. Add a BorderPane into the GUI to be responsible for the application's layout. Add a Canvas object in the middle of the BorderPane. After doing this, use the GraphicsContext object of the Canvas object to draw a smiley. Use white (Color.WHITE) as the background color, and black (Color.BLACK) as the color of the smiley.

<!-- Tehtävän testit tarkastavat vain, että piirrät ikkunaan. Palauta tehtävä vasta kun saat hymiön piirtämisen toimimaan. Huomaa ettei tässä ole tarkoitus piirtää hymiötä esimerkiksi hiirellä -- käytä suoraan GraphicsContext-olion tarjoamia metodeja siten että kuva on piirrettynä heti ohjelman käynnistyessä. -->

The tests in this exercise only check that you draw into the window. Before returning, make sure that drawing the smiley works correctly. Notice that the purpose here is NOT to manually draw the smiley with the mouse -- use the methods of the GraphicsContext object so that the picture is already drawn when the program is first started.

<img src="../img/material/gui-hymio.png" alt="Hymiö" />

</programming-exercise>


## Kuvat

Kuvan näyttämiseen osana sovellusta on useita tapoja. Eräs suoraviivainen lähestymistapa hyödyntää JavaFx:n [Image](https://docs.oracle.com/javafx/2/api/javafx/scene/image/Image.html) ja [ImageView](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/image/ImageView.html) luokkia.

Image-luokalle annetaan parametrina avattavan kuvatiedoston nimi -- nimeä tulee edeltää etuliite `file:`, joka kertoo kuvan olevan tiedosto. Alla olevassa esimerkissä ladataan tiedosto `humming.jpg`, joka annetaan luotavalle ImageView-oliolle parametrina. Tämän jälkeen ImageView-olio asetetaan Pane-asetteluun -- Pane-asettelu ei ota mm. kantaa sen sisältävien elementtien sijaintiin. Lopulta asettelu asetetaan osaksi Scene-oliota ja se asetetaan näkyville.


```java
import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

public class KuvaApplication extends Application {

    @Override
    public void start(Stage stage) {

        Image kuvatiedosto = new Image("file:humming.jpg");
        ImageView kuva = new ImageView(kuvatiedosto);

        Pane ruutu = new Pane();
        ruutu.getChildren().add(kuva);

        stage.setScene(new Scene(ruutu));
        stage.show();

    }

    public static void main(String[] args) {
        launch(args);
    }
}
```


Ohjelman suorittaminen luo seuraavanlaisen ikkunan. Tässä oletetaan, että tiedosto `humming.jpg` on olemassa, ja että se löytyy projektin juuresta (samasta kansiosta kuin tiedosto `pom.xml`).


<img src="../img/material/image-ja-imageview.png" />


Esimerkissä käytetään [Linda Tanner](https://www.flickr.com/photos/15323831@N05)in kuvaa osoitteesta [http://www.freestockphotos.biz/stockphoto/17874](http://www.freestockphotos.biz/stockphoto/17874). Kuva on lisensoitu [Creative Commons CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)-lisenssillä.

ImageView-olio tarjoaa joukon menetelmiä kuvan (yksinkertaiseen käsittelyyn). Kuvaa voi muunmuassa kääntää, sen kokoa voi muuttaa, ja sitä voi siirtää ruudulla. Alla olevassa esimerkissä kuva on käännetty ympäri, sen koko on puolitettu, ja sitä on siirretty hieman oikealle.


```java
@Override
public void start(Stage stage) {

    Image kuvatiedosto = new Image("file:humming.jpg");
    ImageView kuva = new ImageView(kuvatiedosto);

    kuva.setRotate(180);
    kuva.setScaleX(0.5);
    kuva.setScaleY(0.5);

    kuva.setTranslateX(50);

    Pane ruutu = new Pane();
    ruutu.getChildren().add(kuva);

    stage.setScene(new Scene(ruutu));
    stage.show();
}
```

<img src="../img/material/humming-kaannetty.png" />


ImageView-luokka tarjoaa pääsyn kuvaan, mutta sen kautta ei pääse yksittäisiin pikseleihin (eli yksittäisiin yhtä väriä sisältäviin pieniin "ruutuihin", joista kuva koostuu). Kuvan yksittäisiä pikseleitä voi lukea Image-oliosta saatavan [PixelReader](https://docs.oracle.com/javafx/2/api/javafx/scene/image/PixelReader.html)-olion avulla. PixelReader-olion avulla voidaan käydä koko kuva läpi pikseli pikseliltä, samalla kuvaa erilliseen [WritableImage](https://docs.oracle.com/javafx/2/api/javafx/scene/image/WritableImage.html)-olioon kirjoittaen.

Alla olevassa esimerkissä kuva kopioidaan pikseli pikseliltä erilliselle WritableImage-oliolle, joka näytetään sovelluksessa.


```java
@Override
public void start(Stage stage) {

    Image kuvatiedosto = new Image("file:humming.jpg");

    PixelReader lukija = kuvatiedosto.getPixelReader();

    int leveys = (int) kuvatiedosto.getWidth();
    int korkeus = (int) kuvatiedosto.getHeight();

    WritableImage kohdeKuva = new WritableImage(leveys, korkeus);
    PixelWriter kirjoittaja = kohdeKuva.getPixelWriter();

    for (int y = 0; y < korkeus; y++) {
        for (int x = 0; x < leveys; x++) {

            Color vari = lukija.getColor(x, y);
            double punainen = vari.getRed();
            double vihrea = vari.getGreen();
            double sininen = vari.getBlue();
            double lapinakyvyys = vari.getOpacity();

            Color uusiVari = new Color(punainen, vihrea, sininen, lapinakyvyys);

            kirjoittaja.setColor(x, y, uusiVari);
        }
    }

    ImageView kuva = new ImageView(kohdeKuva);

    Pane pane = new Pane();
    pane.getChildren().add(kuva);

    stage.setScene(new Scene(pane));
    stage.show();
}
```

Kuvan ulkomuoto ei ole muuttunut lainkaan.

<img src="../img/material/image-ja-imageview.png" />


<!-- <programming-exercise name='Kollaasi (3 osaa)' tmcname='osa14-Osa14_07.Kollaasi'> -->

<programming-exercise name='Collage (3 parts)' tmcname='part14-Part14_07.Collage'>

<!-- Andy Warhol tuli tutuksi kuvakollaaseista, joissa yksi tai useampi kuva toistui useampaan otteeseen esimerkiksi eri väreissä. -->

Andy Warhol was famous for his photo collages where one or more pictures are repeated multiple times with different colors, for instance.

<!-- Matkitaan tässä tehtävässä hänen tyyliään ja luodaan Andy Warholmainen versio klassisesta Mona Lisasta. Valmis ohjelma näyttää Mona Lisan seuraavan näköisenä. -->

In this exercise we are going to imitate his style and create an Andy Warhol-ish interpretation of the famous Mona Lisa. The finished program will show Mona Lisa looking like this:

<img src="../img/kollaasi-monalisa-neg.png" />

<!-- Aloitetaan. -->

Let's begin.

<!-- <h2>Vasen yläkulma</h2> -->

<h2>Top left corner</h2>

<!-- Tehtäväpohjassa on ohjelma, joka lataa ja näyttää Mona Lisan. Tässä tehtävän osassa tavoitteenasi on luoda tilanne, missä Mona Lisa näkyy pienempänä kuvana vasemmassa yläkulmassa. Pienemmän kuvan koon tulee olla neljäsosa alkuperäisestä kuvasta. -->

In the exercise base there is a program that loads and displays the Mona Lisa. In this section your goal is to create a situation where the Mona Lisa is displayed as a smaller image in the top left corner. The size of the smaller image should be one fourth of the original image.

<img src="../img/kollaasi-monalisa-kulma.png" />

<!-- Käytännössä siis koordinaattiin 0, 0 tulee kopioida koordinaatin 0, 0 arvo. Koordinaattiin 0, 1 koordinaatin 0, 2 arvo. Koordinaattiin 0, 2 koordinaatin 0, 4 arvo. Koordinaattiin 0, 3 koordinaatin 0, 6 arvo jne. Vastaavasti myös y-akselilla, eli esimerkiksi koordinaattiin 1, 1 koordinaatin 2, 2 arvo, ja koordinaattiin 1, 2 koordinaatin 2, 4 arvo. -->

So in practice the point (0, 0) should contain the value at the coordinates (0, 0). The coordinates at (0, 1) should contain the value at coordinates (0, 2). Similarly, the point (0, 2) should contain the value at the point (0, 4), the point (0, 3) the value at (0, 6), etc. The same holds true with the y-axis, so point (1, 1) should have the value of (2, 2), the point (1, 2) the value of (2, 4), etc.

<!-- <h2>Ruudukko</h2> -->

<h2>Grid</h2>

<!-- Muokkaa seuraavaksi ohjelmaa siten, että edellisessä osassa vasempaan yläkulmaan luotu kuva toistuu kuvassa neljään kertaan. Ensimmäisen kuvan vasemman yläkulman tulee olla koordinaatissa 0, 0. Toisen kuvan vasemman yläkulman tulee olla koordinaatissa (kuvan leveys / 2), 0. Kolmannen kuvan vasemman yläkulman tulee olla koordinaatissa 0, (kuvan korkeus / 2). Neljännen kuvan vasemman yläkulman tulee olla koordinaatissa (kuvan leveys / 2), (kuvan korkeus / 2). -->

Then modify the program so that the small image at the top left corner is repeated four times in the whole collage. The top-left corner of the first image should be at the coordinates (0, 0). The top-left corner of the second image should be at the point (width of image / 2, 0). The top-left corner of the third image should be at (0, height of image / 2), and the top-left corner of the fourth image should be at (width of image / 2, height of image / 2).

<img src="../img/kollaasi-monalisa-ruudut.png" />


<!-- <h2>Negatiivi</h2> -->

<h2>Negative</h2>

<!-- Kun olet saanut muodostettua ruudukon, muokkaa kuvaa vielä siten, että kuvassa näytetään negatiivi alkuperäisen kuvan sijaan. Negatiivin luominen onnistuu ottamalla jokaisen pikselin värin erotus luvusta yksi, esim. `punainen = 1.0 - punainen`. -->

You've come this far, and now you can display a grid of four small images. Next, modify the image so that the negative of the original is displayed. You can create a negative by assigning to each pixel, the following color values: the subtraction of the original color from 1. So for the red color this would be `red = 1.0 - red`.

<img src="../img/kollaasi-monalisa-neg.png" />

<!-- *Tehtäväpohjan mukana tuleva Mona Lisa -kuva on noudettu Wikimedian osoitteesta [https://commons.wikimedia.org/wiki/Category:Mona_Lisa](https://commons.wikimedia.org/wiki/Category:Mona_Lisa). Käytetty kuva on vapaasti käytettävissä.* -->

*The Mona Lisa image included in the exercise base has been downloaded from the Wikimedia path [https://commons.wikimedia.org/wiki/Category:Mona_Lisa](https://commons.wikimedia.org/wiki/Category:Mona_Lisa). It can be used freely.*

</programming-exercise>


## Äänet

Äänitiedostojen käsittelyyn löytyy myös useampia menetelmiä, joista tässä käsitellään yksi tapa. Tapa liittyy äänitiedostojen käsittelyyn äänileikkeinä (audioclip), jotka ovat esimerkiksi ääniefektejä ym.


Esimerkissä käytetään Daniel Simionin [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/)-lisenssillä julkaisemaa äänitiedostoa. Äänitiedoston voi kuunnella alla. Äänitiedosto on noudettu osoitteessa [http://soundbible.com/](http://soundbible.com/) olevasta palvelusta.

<br/>

<audio controls>
<source src="../img/front-desk-bells-daniel_simon.wav" type="audio/wav"/>
</audio>

Oletetaan, että tiedoston nimi on `bell.wav`, ja että se sijaitsee projektin juuressa. Yksinkertaisimmillaan äänen soittaminen tapahtuu seuraavasti.

```java
AudioClip leike = new AudioClip("file:bell.wav");
leike.play();
```

AudioClip-olion toiminta on riippuvainen JavaFx:n kirjastoista, joten äänitiedosto tulee käynnistää osana JavaFx-ohjelmaa. Allaoleva esimerkki etsii projektin juuresta tiedostoa `bell.wav` ja luo siitä äänileikkeen. Tämän jälkeen äänileike soitetaan, ja sovellukseen liittyvä (tyhjä) ikkuna avataan.


```java
import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.scene.media.AudioClip;
import javafx.stage.Stage;

public class AudioClipApplication extends Application {

    @Override
    public void start(Stage stage) {

        AudioClip leike = new AudioClip("file:bell.wav");
        leike.play();

        stage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }

}
```

<!-- <programming-exercise name='Hurraa' tmcname='osa14-Osa14_08.Hurraa'> -->

<programming-exercise name='Hurray' tmcname='part14-Part14_08.Hurray'>

<!-- Tehtäväpohjan juurikansiossa on tiedosto `Applause-Yannick_Lemieux.wav`, joka sisältää hurrausäänen. Tehtävänäsi on luoda sovellus, missä on "Hurraa"-nappi. Kun käyttäjä painaa nappia, sovelluksen tulee soittaa edellä mainittu äänitiedosto. -->

In the root folder of the exercise base there is a file called `Applause-Yannick_Lemieux.wav`. The file contains a hurray sound. Your task is to create a program that contains a "Hurray!" button. When the user clicks the button, the program should play the audio file included in the project.

<img src="../img/material/hurray-button.png"/>

<!-- *Äänitiedosto on Yannick Lemieuxin nauhoittama. Tiedosto on lisensoitu Creative Commonsin Attribuutiolisenssillä [https://creativecommons.org/licenses/by/3.0/](https://creativecommons.org/licenses/by/3.0/).* -->

*The audio file is recorded by Yannick Lemieux. It is licensed with the Creative Commons attribution license [https://creativecommons.org/licenses/by/3.0/](https://creativecommons.org/licenses/by/3.0/).*


</programming-exercise>


<text-box variant='hint' name='Mediasoittimen luominen'>

Osoitteessa [https://examples.javacodegeeks.com/desktop-java/javafx/javafx-media-api/](https://examples.javacodegeeks.com/desktop-java/javafx/javafx-media-api/) on opas mediasoittimen luomiseen. Opas on varsin hyvä lähtökohta mikäli äänten soittaminen ja käsittely ohjelmallisesti kiinnostaa.

</text-box>
