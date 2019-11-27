---
path: '/osa-13/2-kayttoliittymakomponentit-ja-niiden-asettelu'
title: 'Käyttöliittymäkomponentit ja niiden asettelu'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät mistä käyttöliittymät koostuvat ja osaat käynnistää graafisen käyttöliittymän.
- Tunnet muutamia käyttöliittymäkomponentteja ja osaat lisätä niitä käyttöliittymään.
- Tunnet menetelmiä käyttöliittymäkomponenttien asetteluun.

</text-box>


<!-- Graafisia käyttöliittymiä luodessa ohjelmoijat tyypillisesti hyödyntävät valmiiden käyttöliittymäkirjastojen tarjoamia osia sovellusten laatimiseen. Ohjelmoijan ei esimerkiksi kannata toteuttaa käyttöliittymän nappia tyhjästä (eli luoda luokkaa, joka piirtää napin sekä mahdollistaa siihen liittyvien toiminnallisuuksien käsittelyn), sillä vastaava komponentti löytyy yleensä käyttöliittymäkirjastoista valmiina. Tutustutaan seuraavaksi muutamaan käyttöliittymäkomponenttiin. -->
Typically programmers use  existing libraries for implementing graphical user interfaces. For example it would not be worth it to implement a button from scratch (which would require creating a class which draws a button and handles all functionalities of the button), because a button component can usually be found from an existing library ready to use. We will now learn to use some interface components.


<!-- Tekstin näyttäminen tapahtuu [Label](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Label.html)-luokan avulla. Label tarjoaa käyttöliittymäkomponentin, jolle voi asettaa tekstiä ja jonka sisältämää tekstiä voi muokata metodien avulla. Näytettävä teksti asetetaan joko konstruktorissa tai erillisellä `setText`-metodilla. -->
Text can be displayed using the [Label](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Label.html) class. The Label class provides an interface component which can display text, and offers methods for modifying the displayed text. The text to be shown is either set in the constructor, or using `setText` method.


```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

public class JavaFxApplication extends Application {

    @Override
    public void start(Stage window) {
        Label textComponent = new Label("Text element");

        FlowPane componentGroup = new FlowPane();
        componentGroup.getChildren().add(textComponent);

        Scene view = new Scene(componentGroup);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxApplication.class);
    }
}
```

<img src="../img/material/gui-tekstielementti.png" alt="Ikkuna, jossa on textComponent. Ikkunassa näkyy teksti 'Text element'."/>


<!-- Käyttöliittymään saa painikkeita [Button](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Button.html)-luokan avulla. Napin lisääminen käyttöliittymään tapahtuu aivan kuten tekstikomponentin lisääminen. -->
Buttons can be added using the [Button](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/Button.html) class. Buttons can be added the same way we added labels above.


```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

public class JavaFxApplication extends Application {

    @Override
    public void start(Stage window) {
        Button buttonComponent = new Button("This is a button");

        FlowPane componentGroup = new FlowPane();
        componentGroup.getChildren().add(buttonComponent);

        Scene view = new Scene(componentGroup);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxApplication.class);
    }
}
```

<img src="../img/material/gui-nappi.png" alt="Ikkuna, jossa on nappi. Napissa on teksti 'This is a button'."/>


<!-- Sovellukseen voi lisätä myös useampia käyttöliittymäelementtejä samaan aikaan. Alla käytössä on sekä nappi että textComponent. -->
You can also add multiple components at the same time. Below we use both a button and a label.


```java
package application;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.FlowPane;
import javafx.stage.Stage;

public class JavaFxApplication extends Application {

    @Override
    public void start(Stage window) {
        Button buttonComponent = new Button("This is a button");
        Label textComponent = new Label("Text element");

        FlowPane componentGroup = new FlowPane();
        componentGroup.getChildren().add(buttonComponent);
        componentGroup.getChildren().add(textComponent);

        Scene view = new Scene(componentGroup);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
```


<!-- Sovellus näyttää seuraavalta. -->
The application looks like this:


<img src="../img/material/gui-nappi-ja-teksti.png" alt="Ikkuna, jossa on nappi sekä textComponent. Napissa on teksti 'This is a button' ja textComponent sisältää tekstin 'Text element'."/>


<!-- Osoitteessa [https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/](https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/) on listattuna joukko valmiita käyttöliittymäkomponentteja. Sivu tarjoaa myös esimerkkejä käyttöliittymäkomponenttien käytöstä. -->
You can find a list of available interface component from [https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/](https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/). The site also has examples on how to use them.

<!-- Käyttöliittymäkomponentteja on huomattava määrä. Niiden opiskeluun kannattaa käyttää verkossa olevia valmiita oppaita kuten edellä mainittua verkkosivua. Käyttöliittymäkomponentteja kannattaa kokeilla aluksi erikseen siten, että kokeilee yhden komponentin lisäämistä ja tarkastelee sen toimintaa. -->
There are a considerable amount of different interface components. Online materials, like the site linked above, are a good way to learn about them. In the beginning it is good to try them out one at a time to learn how they work.

<quiznator id='c17f53ef-9476-50c5-a046-057d9ee3f4c8'></quiznator>

<!-- Kun yksittäiset komponentit tulevat tutuksi, on niiden käyttäminen suoraviivaisempaa. Lähes kaikille komponenteille yhteistä on se, miten ne lisätään sovellukseen. Kun osaat lisätä yhden komponentin käyttöliittymään, osaat lisätä käytännössä lähes kaikki komponentit käyttöliittymään. -->
When you get more familiar with different components, using them becomes easier. Common between almost all of the components is how they can be added to an interface - when you know how to add one, you can add almost any component to your interface.

<!-- Ainoa merkittävä ero käyttöliittymäkomponenttien lisäämisessä liittyy siihen, että mihin kohtaan käyttöliittymää komponentin haluaa lisätä. Tarkastellaan käyttöliittymäkomponenttien asettelua kohta. -->
The biggest difference between adding different components is the placement. You will learn more about the placement of interface components soon.


<programming-exercise name='Button and label' tmcname='part13-Part13_02.ButtonAndLabel'>

<!-- Luo edellistä esimerkkiä seuraten tehtäväpohjassa olevaan luokkaan käyttöliittymä, jossa on nappi (Button) ja textComponent (Label). Napin tulee olla tekstikomponentin vasemmalla puolella tai yläpuolella. -->
Following the example above create a user interface containing a Button and a Label to the class in the exercise template.
The Label must be either on top or on the left side of the Button.

</programming-exercise>


<programming-exercise name='Nappi ja tekstikenttä' tmcname='osa13-Osa13_03.NappiJaTekstikentta'>

Luo tehtäväpohjassa olevaan luokkaan graafinen käyttöliittymä, jossa on nappi ja tekstikenttä. Tekstikentän saa toteutettua luokalla [TextField](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/control/TextField.html). Napin tulee olla tekstikentän vasemmalla puolella tai yläpuolella.

</programming-exercise>


## Käyttöliittymäkomponenttien asettelu


Jokaisella käyttöliittymäkomponentilla on käyttöliittymässä sijainti. Komponentin sijainnin määrää käytössä oleva käyttöliittymäkomponenttien asetteluun käytettävä luokka.

Edellisissä esimerkeissä käytimme käyttöliittymäkomponenttien asetteluun [FlowPane](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/FlowPane.html)-nimistä luokkaa. FlowPanen avulla käyttöliittymään lisättävät komponentit tulevat vierekkäin. Jos windown koko pienenee siten, että kaikki komponentit eivät mahdu vierekkäin, rivitetään komponentit automaattisesti. Alla olevassa kuvassa edellisen esimerkin tuottamaa sovellusta on kavennettu, jolloin komponentit ovat rivittyneet automaattisesti.

<img src="../img/material/gui-nappi-ja-teksti-rivitetty.png" alt="Ikkuna, jossa on nappi sekä textComponent. Napissa on teksti 'This is a button' ja textComponent sisältää tekstin 'Text element'. Ikkunan leveys on niin pieni, että komponentit ovat omilla riveillään."/>


### BorderPane

[BorderPane](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/BorderPane.html)-luokan avulla käyttöliittymäkomponentit voidaan asetella viiteen pääkohtaan käyttöliittymässä: ylälaita, oikea laita, alalaita, vasen laita ja keskikohta. Perinteiset sovellukset, kuten käyttämäsi web-selain hyödyntävät tätä asettelua. Ylälaidassa on valikko sekä osoiterivi, ja keskellä on sivun sisältö.


```java
package sovellus;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage window) {
        BorderPane asettelu = new BorderPane();
        asettelu.setTop(new Label("ylälaita"));
        asettelu.setRight(new Label("oikea laita"));
        asettelu.setBottom(new Label("alalaita"));
        asettelu.setLeft(new Label("vasen laita"));
        asettelu.setCenter(new Label("keskikohta"));

        Scene view = new Scene(asettelu);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
```

<img src="../img/material/gui-borderpane.png" alt="BorderPane-asettelua käyttävä käyttöliittymä, jossa jokaiseen pääkohtaan on asetettu textComponent."/>


<programming-exercise name='BorderPane' tmcname='osa13-Osa13_04.BorderPane'>

Luo tehtäväpohjassa olevaan luokkaan graafinen käyttöliittymä, joka käyttää BorderPane-luokkaa käyttöliittymäkomponenttien asetteluun. Lisää ylälaitaan textComponent, jossa on teksti "NORTH", oikeaan laitaan textComponent, jossa on teksti "EAST", ja alalaitaan textComponent, jossa on teksti "SOUTH".

</programming-exercise>


### HBox

[HBox](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/HBox.html)-luokan avulla käyttöliittymäkomponentit asetellaan riviin.


```java
@Override
public void start(Stage window) {
    HBox asettelu = new HBox();

    asettelu.getChildren().add(new Label("eka"));
    asettelu.getChildren().add(new Label("toka"));
    asettelu.getChildren().add(new Label("kolmas"));

    Scene view = new Scene(asettelu);

    window.setScene(view);
    window.show();
}
```

<img src="../img/material/gui-hbox.png" alt="Tekstikomponentit on asetettu riviin HBox-asettelun avulla. Komponentit ovat kiinni toisissaan."/>


Kuten edellisestä esimerkistä huomaa, HBox asettaa käyttöliittymäkomponentit oletuksena täysin toisiinsa kiinni. Metodin setSpacing avulla käyttöliittymäkomponenttien väliin saa tyhjää.


```java
@Override
public void start(Stage window) {
    HBox asettelu = new HBox();
    asettelu.setSpacing(10);

    asettelu.getChildren().add(new Label("eka"));
    asettelu.getChildren().add(new Label("toka"));
    asettelu.getChildren().add(new Label("kolmas"));

    Scene view = new Scene(asettelu);

    window.setScene(view);
    window.show();
}
```

<img src="../img/material/gui-hbox-spacing.png" alt="Käyttöliittymäkomponentit on asetettu riviin HBox-asettelun avulla. Komponenttien välillä on 10 pikseliä eroa."/>



Luokka [VBox](https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/VBox.html) toimii vastaavasti, mutta asettelee käyttöliittymäkomponentit allekkain.


<img src="../img/material/gui-vbox-spacing.png" alt="Käyttöliittymäkomponentit on asetettu allekkain VBox-asettelun avulla. Komponenttien välillä on 10 pikseliä eroa."/>


### GridPane

[GridPane](https://docs.oracle.com/javafx/2/api/javafx/scene/layout/GridPane.html)-luokan avulla käyttöliittymäkomponentit asetellaan ruudukkoon. Alla olevassa esimerkissä luodaan 3x3-kokoinen ruudukko, jossa jokaisessa ruudussa on nappi.


```java
@Override
public void start(Stage window) {
    GridPane asettelu = new GridPane();

    for (int x = 1; x <= 3; x++) {
        for (int y = 1; y <= 3; y++) {
            asettelu.add(new Button("" + x + ", " + y), x, y);
        }
    }

    Scene view = new Scene(asettelu);

    window.setScene(view);
    window.show();
}
```

<img src="../img/material/gui-gridpane-3x3.png" alt="3 kertaa 3 ruudukkoon asetetut 9 nappia."/>


### Useampi asettelija samassa

Käyttöliittymäkomponenttien asettelijoita voi myös yhdistellä. Tyypillinen ratkaisu on BorderPane-asettelun käyttäminen pohjalla, jonka sisälle asetetaan muita asetteluja. Alla olevassa esimerkissä BorderPanen ylälaidassa on samalle riville asetteluun käytetty HBox ja vasemmassa laidassa allekkain asetteluun käytetty VBox. Keskelle on laitettu tekstikenttä.


```java
package sovellus;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class JavaFxSovellus extends Application {

    @Override
    public void start(Stage window) {
        BorderPane asettelu = new BorderPane();

        HBox napit = new HBox();
        napit.setSpacing(10);
        napit.getChildren().add(new Button("Eka"));
        napit.getChildren().add(new Button("Toka"));
        napit.getChildren().add(new Button("Kolmas"));

        VBox tekstit = new VBox();
        tekstit.setSpacing(10);
        tekstit.getChildren().add(new Label("Eka"));
        tekstit.getChildren().add(new Label("Toka"));
        tekstit.getChildren().add(new Label("Kolmas"));

        asettelu.setTop(napit);
        asettelu.setLeft(tekstit);

        asettelu.setCenter(new TextArea(""));

        Scene view = new Scene(asettelu);

        window.setScene(view);
        window.show();
    }

    public static void main(String[] args) {
        launch(JavaFxSovellus.class);
    }
}
```

<img src="../img/material/gui-useampi.png" alt="Samassa käyttöliittymässä käytetty useampaa asettelijaa. BorderPane luo rungon, ylälaidassa on HBox ja vasemmassa laidassa VBox. Keskellä olevaan tekstilaatikkoon on kirjoitettu tekstiä."/>


<programming-exercise name='Tekstitilastointia' tmcname='osa13-Osa13_05.Tekstitilastointia'>

Luo tehtäväpohjassa olevaan luokkaan sovellus, joka käyttää BorderPane-luokkaa asetteluun. Keskellä tulee olla TextArea-luokasta luotu tekstikenttä, ja alalaidassa kolme textComponenta. Aseta alalaidan tekstikomponentit HBox-olion sisään. Ensimmäisessä tekstikomponentissa tulee olla teksti "Kirjaimia: 0". Toisessa tekstikomponentissa tulee olla teksti "Sanoja: 0". Kolmannessa tekstikomponentissa tulee olla teksti "Pisin sana on:".


</programming-exercise>
