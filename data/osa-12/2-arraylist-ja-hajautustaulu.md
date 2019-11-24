---
path: '/osa-12/2-arraylist-ja-hajautustaulu'
title: 'ArrayList ja Hajautustaulu'
hidden: true
---

<text-box variant='learningObjectives' name='Oppimistavoitteet'>

- Tiedät miten miten muuttuvansizeinen geneerinen myList toteutetaan.
- Tunnet erään mahdollisen tavan Javan ArrayListin kaltaisen luokan toteutukselle.
- Tiedät miten miten hajautustaulu toteutetaan.
- Tunnet erään mahdollisen tavan Javan HashMapin kaltaisen luokan toteutukselle.

</text-box>

ArrayList ja Hajautustaulu ovat ohjemoinnissa hyvin yleisesti käytettyjä tietorakenteita. Tarkastellaan tässä niiden todelmyList toteutusta. Kerrataan ensin lyhyesti taulukon käyttöä, jonka jälkeen rakennetaan esimerkinomaisesti ensin ArrayListiä imitoiva tietorakenne `List`, jota hyödynnetään sitten tietorakenteen `Hajautustaulu` tekemisessä.


## Lyhyt kertaus taulukoista

Taulukko on olio, joka sisältää rajatun määrän numeroituja paikkoja valueille. Taulukon pituus (tai size) on siinä olevien paikkojen lukumäärä, eli kuinka monta valuea taulukkoon voi laittaa. Taulukon size on aina ennalta määrätty: size määrätään taulukon luomisen yhteydessä eikä sitä voi muuttaa.

Taulukkotyyppi määritellään hakasuluilla, jota edeltää taulukossa olevien alkioiden tyyppi (alkioidentyyppi[]). Taulukko luodaan `new`-kutsulla, jota seuraa taulukon alkioiden tyyppi, hakasulut, sekä hakasulkujen sisään asetettava luotavan taulukon alkioiden lukumäärä.

```java
int[] numbers = new int[3];
String[] strings = new String[5];
```

Taulukon alkioihin viitataan taulukon indexen perusteella. Alla olevassa esimerkissä luodaan kolmepaikkainen sizenaislukutaulukko, jonka jälkeen taulukon indekseihin 0 ja 2 asetetaan values. Tämän jälkeen values tulostetaan.

```java
int[] numbers = new int[3];
numbers[0] = 2;
numbers[2] = 5;

System.out.println(numbers[0]);
System.out.println(numbers[2]);
```

<sample-output>

2
5

</sample-output>


Yksittäisen valuen asettaminen taulukon tiettyyn paikkaan tapahtuu kuten valuen asetus tavalliseen muuttujaan, mutta taulukkoon asetettaessa kerrotaan paikkaa kuvaava index.

Taulukko-olion koon saa selville taulukko-olioon liittyvän julkisen oliomuuttujan `length` avulla, ja taulukon alkioiden läpikäynti voidaan toteuttaa esimerkiksi for-toistolauseen avulla.


```java
int[] numbers = new int[4];
numbers[0] = 42;
numbers[1] = 13;
numbers[2] = 12;
numbers[3] = 7;

System.out.println("Taulukossa on " + numbers.length + " alkiota.");

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```


<sample-output>

Taulukossa on 4 alkiota.
42
13
12
7

</sample-output>


<quiz id='fd66bcc3-962b-5970-936f-47c6d2d56d18'></quiz>


<programming-exercise name='Sum these for me' tmcname='part12-Part12_03.SumTheseForMe'>

<!-- Luo luokkaan `Ohjelma` luokkametodi `public static int sum(int[] taulukko, int mista, int mihin, int pienin, int suurin)`. Metodin tulee laskea sille parametrina annetusta taulukosta indexen mista ja mihin välillä olevien valuejen sum. Summaan otetaan mukaan vain ne values, jotka ovat suurempia tai yhtäsuuria kuin pienin ja pienempiä kuin suurin. -->
In the class `Program` implement a class method `public static int sum(int[]array, int fromWhere, int toWhere, int smallest, int largest)`. The method must calculate the sum of the elements in the array between the lower and the upper limits. Only numbers smaller or equal to the int largest and larger or equal to the int smallest are added to the sum.

<!-- Metodin tulee lisäksi varmistaa, että käsiteltävät indext ovat valideja. Mikäli parametri `mista` on pienempi kuin 0, tulee taulukon indexen läpikäynti alkaa parametrin mista valuen sijaan nollasta. Vastaavasti, mikäli parametri `mihin` on suurempi kuin käsiteltävä taulukko, tulee taulukon indexen läpikäynti lopettaa  parametrin mihin valuen sijaan taulukon sizeon. -->
The method must also check, that the lower and the upper limit are valid indexes in the array. If the parameter `fromWhere` is smaller than 0, the lower limit becomes 0 instead. Accordingly, if the parameter `toWhere` is larger than the size of the array, the upper limit becomes the last index of the array instead.

```java
int[] numbers = {3, -1, 8, 4};

System.out.println(sum(numbers, 0, 0, 0, 0));
System.out.println(sum(numbers, 0, 0, 0, 10));
System.out.println(sum(numbers, 0, 1, 0, 10));
System.out.println(sum(numbers, 0, 1, -10, 10));
System.out.println(sum(numbers, -1, 999, -10, 10));
```

<sample-output>

0
0
3
3
14

</sample-output>

</programming-exercise>


Taulukoita voi käyttää täysin samalla tavalla kuin muitakin muuttujia, eli niitä voi käyttää esimerkiksi oliomuuttujina, metodin parametreina, metodin paluuvaluena ym.

Merkittävä osa yleisesti käytetyistä tietorakenteista käyttää taulukoita niiden sisäisessä toteutuksessa.


## Lists


<!-- Tarkastellaan erästä tapaa Javan tarjoaman ArrayList-tietorakenteen toteuttamiseen. Javan ArrayList hyödyntää sisäisesti taulukkoa, jonka alkioiden tyyppi on määritelty luokalle ArrayList annettavan tyyppiparametrin avulla. Tämän takia myListlle saa lisätä käytännössä minkä tyyppisiä firstFreeIndex tahansa. List tarjoaa useita metodeja, joista tämän esimerkin kannalta oleellisia ovat `add` eli lisääminen, `contains` eli olemassaolon tarkastaminen, `remove` eli removeminen sekä `get`, eli tietystä indexstä hakeminen. -->
Lets examine one way to implement the Java ArrayList data structure. Java ArrayList uses an array. The type of the elements in the array is defined by the type parameter given to the ArrayList. Due to this we can add nearly any type of data to a list. Java List offers multiple methods, but right now `add`, `contains`,`remove` and `get` are most relevant for us.


```java
ArrayList<String> strings = new ArrayList<>();
System.out.println(strings.contains("Hello!"));
strings.add("Hello!");
System.out.println(strings.contains("Hello!"));
strings.remove("Hello!");
System.out.println(strings.contains("Hello!"));
```

<sample-output>

false
true
false

</sample-output>


### Creating a new list

<!-- Luodaan luokka `List`. Listarakenne sisältää geneerisen taulukon -- eli taulukon, jonka alkioiden tyyppi määräytyy ajonaikaisesti tyyppiparametreista. Asetetaan taulukon alkukooksi `10`. Taulukko luodaan object-tyyppisenä ja muunnetaan geneerisen tyyppiseksi `(T[]) new Object[10];` -- tämä tehdään, sillä kutsu `new T[10];` ei ainakaan toistaiseksi toimi Javassa. -->
Lets create class `List`. The List has a generic array -- the type of the elements in the array is defined on run time using type parameters.
Lets set the size of the array to `10`. The array is created as type object, and changed to type generic with `(A[]) new object[10];` -- this is done because Java does not support the call `new A[10];` for now.


```java
public class List<Type> {
    private Type[] values;

    public List() {
        this.values = (Type[]) new Object[10];
    }
}
```

<!-- List kapseloi taulukon. Alkutilanteessa jokainen taulukon index sisältää `null`-viitteen. -->
List encapsulates an array. In the beginning, every element in the array contains a `null`-reference.


### Adding values to the list

<!-- Lisätään luokalle metodi `public void add(T value)`, mikä mahdolmyLista valuejen lisäämisen myListlle. Luodaan luokalle tätä varten erillinen sizenaislukumuuttuja, joka pitää kirjaa taulukon ensimmäisestä tyhjästä paikasta. -->
Lets add method `public void add(A value)`, which enables adding values to the list. We have to add an int variable to keep track of the first empty index in the array.


```java
public class List<Type> {

    private Type[] values;
    private int firstFreeIndex;

    public List() {
        this.values = (Type[]) new Object[10];
        this.firstFreeIndex = 0;
    }

    public void add(Type value) {
        this.values[this.firstFreeIndex] = value;
        this.firstFreeIndex++; // same as this.firstFreeIndex = this.firstFreeIndex + 1;
    }
}
```

<!-- Nyt valuejen lisääminen myListlle onnistuu -- tai, ainakin myListn luominen ja metodin kutsuminen onnistuu -- emme vielä voi testata ovatko values todellisuudessa myListlla. -->
Now we can add values to the list -- or at least we can create a list and call the add method. We cannot test if the values are actually saved to the list yet.

```java
List<String> myList = new List<>();
myList.add("hello");
myList.add("world");
```

### Adding values to a list part 2

<!-- Edellä kuvatussa `add`-metodissa on pieni ongelma. Ongelma ilmenee kun seuraava ohjelmakoodi suoritetaan. -->
There is a small problem with the `add` method. The problem comes when the following code is run:


```java
List<String> myList = new List<>();
for (int i = 0; i < 11; i++) {
    myList.add("hello");
}
```

<sample-output>
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 10
    at dataStructures.List.add(List.java:14)
    at dataStructures.Program.main(Program.java:8)
</sample-output>

<!-- Listan size ei kasva. Eräs `ArrayList`-luokan oleellisimmista toiminnallisuuksista on se, että sen size kasvaa aina tarvittaessa -- ohjelmoijan ei siis tarvitse varoa myListn täyttymistä. -->
The size of the list does not grow. One of the benefits of the `ArrayList` class is, that it grows as needed -- programmers do not have to worry about the list getting full.

<!-- Lisätään ohjelmaan myListn koon kasvattamiseen liittyvä toiminnallisuus. Listan sizea kasvatetaan aina jos täyteen myListan (eli myListn sisällä olevaan täyteen taulukkoon) yritetään lisätä value. Kasvattaminen toteutetaan luomalla new taulukko, johon vanhan taulukon values kopioidaan. Tämän jälkeen vanha taulukko jätetään hellotteille, ja uudesta taulukosta tulee olion käyttämä taulukko. -->
Lets add the functionality for increasing the size of the List. The size of the List increases if user tries to add a value to a full list. The size of the List is increased by creating a new, larger, array to which the values from the old array are copied to. After this the old array is abandoned and the List starts to use the new array.

<!-- Uuden taulukon size määräytyy Javassa kaavalla `vanhaKoko + vanhaKoko / 2`. Hyödynnetään samaa kaavaa omassa toteutuksessamme. Luodaan kasvattamista varten erillinen metodi `grow`, joka on vain luokan omien metodien käytössä (eli sillä on `private`-näkyvyys). -->
The size of the array is determined in Java with the formula `oldSize + oldSize / 2`. Lets use the same formula in our implementation. We'll create a new method `grow` for increasing the size of the array. The method is available only for other methods in the class (it is `private`).

```java
private void grow() {
    int newSize = this.values.length + this.values.length / 2;
    Type[] new = (Type[]) new Object[newSize];
    for (int i = 0; i < this.values.length; i++) {
        new[i] = this.values[i];
    }

    this.values = new;
}
```

Toteutus luo uuden taulukon, jonka size on 1.5-kertainen vanhaan taulukkoon verrattuna. Tämän jälkeen kaikki vanhan taulukon alkiot kopioidaan uuteen taulukkoon ja lopulta olion `values`-muuttujan -- eli taulukon -- valueksi asetetaan new taulukko. Javan automaattinen roskienkerääjä removea vanhan taulukon kun siihen ei enää viitata.

Muokataan vielä metodia `add` siten, että taulukon sizea kasvatetaan tarvittaessa.

```java
public void add(Type value) {
    if(this.firstFreeIndex == this.values.length) {
        grow();
    }

    this.values[this.firstFreeIndex] = value;
    this.firstFreeIndex++;
}
```

<!-- Nyt firstFreeIndex voi lisätä myListlle lähes rajattomasti. -->
Now we can add almost unlimited amount of elements to the List.

<text-box variant='hint' name='On the effectiveness of this method'>

<!-- Edellä kuvattu menetelmä kopioi kasvatuksen yhteydessä jokaisen vanhan taulukon valuen uuteen taulukkoon. Mikäli taulukossa on esimerkiksi kaksi miljoonaa alkiota, kopiointi käy kaksi miljoonaa alkiota läpi. -->
The method described above copies every element from the old array to the new array. If we would have for example two million elements in an array, we must go through two million elements while copying them.

<!-- Menetelmän tehokkuuteen -- ja parannusehdotuksiin -- paneudutaan muunmuassa kursseilla Tietorakenteet ja algoritmit sekä Algoritmien suunnittelu ja analyysi. -->
We will discuss the effectiveness of this method -- and ways to make it more effective -- in the course Tietorakenteet ja algoritmit and Algoritmien suunnittelu ja analyysi.

</text-box>


### Checking the existence of a value

<!-- Luodaan myListlle seuraavaksi metodi `public boolean contains(T value)`, minkä avulla voidaan tarkistaa onko alkio myListlla. Hyödynnetään tässä tietoa siitä, että jokainen Javan olio -- riippumatta sen tyypistä -- perii Object-luokan (tai on Object-tyyppinen). Tämän takia jokaisella oliolla on metodi `public boolean equals(Object object)`, jota voidaan käyttää yhtäsuuruuden tarkasteluun. -->
Next we'll create a method `public boolean contains(A value)`, which we use to check whether the List contains a value or not. We will make use of the fact that each Java object -- no matter its type -- inherits the Object class (or is type Object). Due to this, each object has the method `public boolean equals(Object object)`, which we can use to check equality.

<!-- Luokan `List` muuttuja `firstFreeIndex` sisältää tiedon valuejen tämän hetkisestä lukumäärästä. Voimme siis toteuttaa `contains`-metodin siten, että tarkastelemme vain ne myListn indext, joissa on firstFreeIndex. -->
The variable `firstFreeIndex` contains the number of elements in the array. We can implement the `contains` method so, that it only checks the indexes in the array which contain a value.

```java
public boolean contains(Type value) {
    for (int i = 0; i < this.firstFreeIndex; i++) {
        if (this.values[i].equals(value)) {
            return true;
        }
    }

    return false;
}
```

<!-- Ohjelmassa on nyt mahdollisuus myListlla olevien alkioiden olemassaolon tarkasteluun. -->
We can now inspect the elements in the List.

```java
List<String> myList = new List<>();
System.out.println(myList.contains("hello"));
myList.add("hello");
System.out.println(myList.contains("hello"));
```

<sample-output>

false
true

</sample-output>

<!-- Edellä esitetty menetelmä olettaa, että käyttäjä ei lisää myListlle `null`-viitettä ja että equals-metodi tarkastaa ettei parametrina saatu value ole null. -->
The method above assumes, that the user will not add a `null` reference to the list, and that the equals method checks that the value given to it as a parameter is not null.

### Removing a value

<!-- Toteuttamallemme myListlle voi nyt lisätä firstFreeIndex, jonka lisäksi valuen olemassaolon voi tarkastaa. Toteutetaan vielä valuen removeminen. Toteutetaan metodi `public void remove(T value)`, joka removea myListlta *yhden* `value`-valueisen alkion. -->
We can now add values to the List, and check if the List contains a value. Now we will implement the functionality for removing a value from the List.
Let's implement method `public void remove(Type value)`, which removes *one* value type `value`.

<!-- Yksinkertainen toteutus olisi seuraava. -->
Simple implementation would be as follows:

```java
public void remove(Type value) {
    for (int i = 0; i < this.firstFreeIndex; i++) {
        if (value == this.values[i] || this.values[i].equals(value)) {
            this.values[i] = null;
            this.firstFreeIndex--;
            return;
        }
    }
}
```

<!-- Yllä oleva lähestymistapa on kuitenkin ongelmallinen, sillä se jättää myListlle "tyhjiä" kohtia, jonka lisäksi esimerkiksi edellä esitetty etsiminen ei enää toimi. -->
The above implementation is however problematic, because it leaves "empty" slots to the List, which would lead to the contains method not working.

<!-- Ongelman voi ratkaista useammalla tavalla, joista yksi on siirtää jokaista poistettua valuea seuraavaa valuea vasemmalle. Lisätään tämä toiminnallisuus ohjelmaan. -->

```java
public void remove(T value) {
    boolean found = false;
    for (int i = 0; i < this.firstFreeIndex; i++) {
        if (found) {
            this.values[i - 1] = this.values[i];
        } else if (value == this.values[i] || this.values[i].equals(value)) {
            this.firstFreeIndex--;
            found = true;
        }
    }
}
```

<!-- Emme ole kovin tyytyväisiä edelliseen ratkaisuun, sillä siinä tehdään monta asiaa samaan aikaan. Metodissa sekä etsitään alkiota että siirretään alkioita. Pilkotaan toiminnallisuus kahteen erilliseen metodiin: `private int indexOfValue(T value)`, joka etsii parametrina annetun valuen indexn, sekä `private void moveToTheLeft(int indexsta)`, joka siirtää annetusta indexstä lähtien alkioita yhden vasemmalle. -->
We are not really satisfied with the solution above, because it does too many things at the same time. The method looks for an element and moves elements around. We will split the functionality into two methods: `private int indexOfValue(Type value)`, which searches for the index of the value given to it as a parameter, and `private void moveToTheLeft(int fromIndex)`, which moves the elements above the given index to the left.

<!-- Toteutetaan ensin metodi `private int indexOfValue(T value)`, joka etsii annetun valuen indexn. Metodi palauttaa negatiivisen luvun mikäli valuea ei löydy. -->
First lets implement the method `private ind indexOfValue(Type value)`, which searches for the index of the given value. The method returns -1 if the value is not found.

```java
private int indexOfValue(Type value) {
    for (int i = 0; i < this.firstFreeIndex; i++) {
        if (this.values[i].equals(value)) {
            return i;
        }
    }

    return -1;
}
```

<!-- Toteutetaan tämän jälkeen metodi `private void moveToTheLeft(int fromIndex)`, joka siirtää firstFreeIndex annetusta indexstä lähtien vasemmalle. -->
Then we will implement the method `private void moveToTheLeft(int fromIndex)`, which moves values from the given index one place to the left.

```java
private void moveToTheLeft(int fromIndex) {
    for (int i = fromIndex; i < this.firstFreeIndex - 1; i++) {
        this.values[i] = this.values[i + 1];
    }
}
```

<!-- Nyt metodi `remove` voidaan toteuttaa edellisten avulla hieman selkokielisemmäksi. -->
Now we can implement the method `remove` using these two methods.

```java
public void remove(Type value) {
    int indexOfValue = indexOfValue(value);
    if (indexOfValue < 0) {
        return; // not found
    }

    moveToTheLeft(indexOfValue);
    this.firstFreeIndex--;
}
```


<text-box variant='hint' name='On the effectiveness of the method'>

<!-- Edellä kuvattu menetelmä kopioi poiston yhteydessä jokaisen poistettua alkiota seuraavan alkion vasemmalle. Pohdi toteutuksen tehokkuutta tilanteessa, missä myLista käytetään jonona. -->
The method describes above copies each element after the removed element one place to the left. Think about the effectiveness of this method when the List is used as a queue.

<!-- Tämänkin menetelmän tehokkuuteen -- ja parannusehdotuksiin -- paneudutaan muunmuassa kursseilla Tietorakenteet ja algoritmit sekä Algoritmien suunnittelu ja analyysi. -->
We will discuss the effectiveness of this method -- and ways to make it more effective -- in the course Tietorakenteet ja algoritmit and Algoritmien suunnittelu ja analyysi.

</text-box>


<!-- Luokassa myList on nyt hieman toistuvaa koodia. Metodi `contains` on hyvin samankaltainen metodin `indexOfValue` kanssa. Muokataan vielä metodia `contains` siten, että se toteutetaan metodin `indexOfValue` avulla. -->
The class List now contains some repeated code. The method `contains` is very similiar to the method `indexOfValue`. Lets modify the method `contains` so that it uses the method `indexOfValue`.


```java
public boolean contains(Type value) {
    return indexOfValue(value) >= 0;
}
```

<!-- Nyt käytössämme on myList, joka tarjoaa metodit `add`, `contains`, ja `remove`. List myös kasvaa tarvittaessa. Listan toteutusta voisi toki vielä kehittää esimerkiksi lisäämällä toiminnallisuuden, mikä pienentää myListn sizea jos valuejen määrä pienenee hyvin pieneksi. -->
Now we have a List, which has the methods `add`, `contains`,  and `remove`. The List also grows in size when needed. The implementation of the List could of course be improved by for example adding functionality for decreasing the size of the List if the number of values in it decreases.

```java
List<String> myList = new List<>();
System.out.println(myList.contains("hello"));
myList.add("hello");
System.out.println(myList.contains("hello"));
myList.remove("hello");
System.out.println(myList.contains("hello"));
```

<sample-output>

false
true
false

</sample-output>


### Searching from an index

<!-- Lisätään myListlle vielä metodi `public T value(int index)`, joka palauttaa myListn tietyssä indexssä sijaitsevan valuen. Mikäli ohjelmoija hakee valuea myListn ulkopuolelta, hellotetään virhe `IndexOutOfBoundsException`. -->
Let's add method `public Type value(int index)`, which returns the value in the given index of the List. If the user searches for a value in an index outside of the Array, `IndexOutOfBoundsException` is thrown.

```java
public Type value(int index) {
    if (index < 0 || index >= this.firstFreeIndex) {
        throw new ArrayIndexOutOfBoundsException("Index " + index + " outside of [0, " + this.firstFreeIndex + "]");
    }

    return this.values[index];
}
```

<!-- Metodin käyttöä edesauttaisi, mikäli luokan käyttäjällä olisi tieto haettavien valuejen indekseistä. Muutetaan vielä metodi `indexOfValue(T value)` kaikkien käytettäväksi, eli vaihdetaan sen näkyvyysmääre `private` muotoon `public`. -->
This method would be easier to use, if the user had information about the indexes of the values. Let's modify the method `indexOfValue(Type value)` so it can be used by everyone, so it is `public` instead of `private`.

```java
public int indexOfValue(Type value) {
    for (int i = 0; i < this.firstFreeIndex; i++) {
        if (this.values[i].equals(value)) {
            return i;
        }
    }

    return -1;
}
```

```java
List<String> myList = new List<>();
System.out.println(myList.contains("hello"));
myList.add("hello");
System.out.println(myList.contains("hello"));
int index = myList.indexOfValue("hello");
System.out.println(index);
System.out.println(myList.value(index));
myList.remove("hello");
System.out.println(myList.contains("hello"));
```

<sample-output>

false
true
0
hello
false

</sample-output>


### Size of the List

<!-- Lisätään myListlle vielä metodi myListn koon tarkastamiseen. Listan koon saa selville muuttujasta `firstFreeIndex`. -->
Lastly we will add a method for checking the size of the List. The size of the list can be determined by the variable `firstFreeIndex`.


```java
public int size() {
    return this.firstFreeIndex;
}
```

<!-- Nyt myListn alkioiden läpikäynti onnistuu mm. for-lauseella. -->
Now we can use a for-loop to go through the elements of the list.


```java
List<String> myList = new List<>();
myList.add("hello");
myList.add("world");

for(int i = 0; i < myList.size(); i++) {
    System.out.println(myList.value(i));
}
```

<sample-output>

hello
world

</sample-output>


<programming-exercise name='List (2 parts)' tmcname='part12-Part12_04.List' nocoins='1'>

<!-- Toteuta tehtäväpohjaan edellistä esimerkkiä noudattaen luokka `List`. Tehtäväpohjassa ei ole testejä -- kokeile myLista materiaalin esimerkkien ja omien kokeilujen avulla. Tehtävä on kahden pisteen valueinen. -->
Following the example above, implement a class `List`. This exercise has no tests -- test your class using the examples in the material and your own tests.
This exercise is worth 2 points.

</programming-exercise>


## Hajautustaulu

Hajautustaulu on toteutettu taulukkona, missä jokainen alkio sisältää myListn. Listalle tallennetaan (avain,value)-pareja. Käyttäjä voi hakea hajautustaulusta firstFreeIndex avaimen perusteella, ja toisaalta käyttäjä voi lisätä hajautustauluun avain-value -pareja. Kukin avain voi esiintyä hajautustaulussa korkeintaan kerran.

Hajautustaulun toiminta perustuu avaimen hajautusvalueon. Kun hajautustauluun lisätään (avain,value)-pari, lasketaan avaimeen liittyvä hajautusvalue. Hajautusvalue määrää hajautustaulun sisäisen taulukon indexn, missä olevaan myListan (avain,value)-pari lisätään.

Hahmotellaan hajautustaulun toimintaa.


### Avain-value -pari

Luodaan ensin avain-value -paria kuvaava luokka `Pari`. Haluamme tehdä hajautustaulusta mahdollisimman yleiskäyttöisen, joten avaimen ja valuen tyyppi määrätään ajonaikaisesti. Pari sisältää avaimen ja valuen sekä niihin liittyvät get-metodit. Geneeriset tyypit K ja V ovat nimetty sanojen key ja value perusteella.


```java
public class Pari<K, V> {

    private K avain;
    private V value;

    public Pari(K avain, V value) {
        this.avain = avain;
        this.value = value;
    }

    public K getAvain() {
        return avain;
    }

    public V getArvo() {
        return value;
    }

    public void setArvo(V value) {
        this.value = value;
    }
}
```

Avain-value -parien luominen on suoraviivaista.

```java
Pari<String, Integer> pari = new Pari<>("yksi", 1);
System.out.println(pari.getAvain() + " -> " + pari.getArvo());
```

<sample-output>

yksi -> 1

</sample-output>


### Hajautustaulun luominen

Hajautustaulu sisältää taulukon listoja. Jokainen myListn value on edellä kuvattu pari, joka sisältää avain-value -parin. Hajautustaululla on lisäksi tieto valuejen lukumäärästä. Tässä käytössämme on edellä luotu luokka `List`.


```java
public class Hajautustaulu<K, V> {

    private List<Pari<K, V>>[] values;
    private int firstFreeIndex;

    public Hajautustaulu() {
        this.values = new List[32];
        this.firstFreeIndex = 0;
    }
}
```


### Arvon hakeminen

Toteutetaan ensin metodi `public V hae(K avain)`, jota käytetään valuen hakemiseen avaimen perusteella.

Metodissa lasketaan ensin avaimen hajautusvalue ja päätellään sen perusteella hajautustaulun sisäisen taulukon index, mistä firstFreeIndex haetaan. Avaimen hajautusvaluen laskemiseen käytetään jokaisella oliolla olevaa `hashCode`-metodia. Jakojäännöstä käytetään hajautusvaluen hajautustaulun koon sisällä pysymiseen.

Mikäli hajautusvaluen ja jakojäänneksen avulla lasketussa indexssä ei ole myLista, ei indexin ole lisätty vielä yhtäkään avain-value -paria, eikä avaimelle ole tallennettu valuea. Tällöin palautetaan `null`-viite. Muussa tapauksessa taulukon indexssä oleva myList käydään läpi, ja avaimen yhtäsuuruutta vertaillaan jokaiseen myListn avain-value -parin avaimeen. Mikäli joku myListlla olevista avaimista vastaa avainta, jonka perusteella valuea haetaan, palautetaan kyseinen value. Muulloin avainta (ja siihen liittyvää valuea) ei löydy, ja palautetaan value null.


```java
public V hae(K avain) {
    int hajautusArvo = Math.abs(avain.hashCode() % this.values.length);
    if (this.values[hajautusArvo] == null) {
        return null;
    }

    List<Pari<K, V>> valuesIndeksissa = this.values[hajautusArvo];

    for (int i = 0; i < valuesIndeksissa.size(); i++) {
        if (valuesIndeksissa.value(i).getAvain().equals(avain)) {
            return valuesIndeksissa.value(i).getArvo();
        }
    }

    return null;
}
```


<text-box variant='hint' name='Miksei hajautustaulua toteuteta myListna?'>

Hajautustaulun toimintaperiaate perustuu siihen, että avain-value -parit jaetaan hajautusvaluen perusteella pieniin joukkoihin. Tällöin avaimen perusteella haettaessa käydään läpi vain hyvin pieni joukko avain-value -pareja -- olettaen toki, että hajautusvalue on järkevä.

Jos hajautusvalue on aina sama -- esimerkiksi 1 -- vastaa hajautustaulun sisäinen toteutus myLista -- kaikki values ovat samalla myListlla. Jos taas hajautusvalue on hyvin satunnainen, values hajautetaan mahdollisimman tasaisesti taulukon eri listoille.

Hajautustaulu toimii lisäksi siten, että hajautustaulun käyttämää taulukkoa kasvatetaan mikäli valuejen määrä on tarpeeksi iso (tyypillisesti noin 75% taulukon koosta). Tyypillisesti miljoonia avain-value -pareja sisältävän hajautustaulun taulukon yhdessä indexssä on vain muutama avain-value -pari. Tämä tarkoittaa käytännössä sitä, että avain-value -parin olemassaolon selvittämiseen tarvitaan vain hajautusvaluen laskeminen sekä muutaman olion tarkastelu -- tämä on paljon nopeampaa kuin myListn läpikäynti.

</text-box>


### Hajautustauluun lisääminen, osa 1

Toteutetaan hajautustauluun lisäämisen käytettävän metodin `public void add(K avain, V value)` ensimmäinen versio. Ensimmäisessä versiossa hajautustaulun sisältämän taulukon sizea ei kasvateta lisäyksen yhteydessä.

Metodi laskee ensin avaimelle hajautusvaluen ja päättelee hajautusvaluen perusteella hajautustaulun sisäisen taulukon indexn. Jos taulukon kyseisessä indexssä ei ole valuea, taulukon indexin lisätään myList. Tämän jälkeen taulukon indexssä oleva myList käydään läpi ja sieltä etsitään avain-value -paria, jonka avain vastaa lisättävän avain-value -parin avainta. Mikäli vastaava avain löytyy, päivitetään olemassaolevan avain-value -parin value vastaamaan uutta avainta. Muulloin myListan lisätään new avain-value -pari -- tällöin myös hajautustaulussa olevien valuejen lukumäärää kasvatetaan yhdellä.


```java
public void add(K avain, V value) {
    int hajautusArvo = Math.abs(avain.hashCode() % values.length);
    if (values[hajautusArvo] == null) {
        values[hajautusArvo] = new List<>();
    }

    List<Pari<K, V>> valuesIndeksissa = values[hajautusArvo];

    int index = -1;
    for (int i = 0; i < valuesIndeksissa.size(); i++) {
        if (valuesIndeksissa.value(i).getAvain().equals(avain)) {
            index = i;
            break;
        }
    }

    if (index < 0) {
        valuesIndeksissa.add(new Pari<>(avain, value));
        this.firstFreeIndex++;
    } else {
        valuesIndeksissa.value(index).setArvo(value);
    }
}
```

Metodi on melko monimutkainen. Pilkotaan se pienempiin osiin -- ensimmäisen osan vastuulla on avaimeen liittyvän myListn hakeminen ja toisen osan vastuulla on avaimen indexn etsiminen myListlta.


```java
private List<Pari<K, V>> haeAvaimeenLittyvaLista(K avain) {
    int hajautusArvo = Math.abs(avain.hashCode() % values.length);
    if (values[hajautusArvo] == null) {
        values[hajautusArvo] = new List<>();
    }

    return values[hajautusArvo];
}

private int haeAvaimenIndeksi(List<Pari<K, V>> myList, K avain) {
    for (int i = 0; i < myList.size(); i++) {
        if (myList.value(i).getAvain().equals(avain)) {
            return i;
        }
    }

    return -1;
}
```

Nyt metodi `public void add(K avain, V value)` voidaan toteuttaa hieman selkeämmin.


```java
public void add(K avain, V value) {
    List<Pari<K, V>> valuesIndeksissa = haeAvaimeenLittyvaLista(avain);
    int index = haeAvaimenIndeksi(valuesIndeksissa, avain);

    if (index < 0) {
        valuesIndeksissa.add(new Pari<>(avain, value));
        this.firstFreeIndex++;
    } else {
        valuesIndeksissa.value(index).setArvo(value);
    }
}
```


### Hajautustauluun lisääminen, osa 2

Edellä kuvattu hajautustauluun lisääminen toimii osittain. Toiminnallisuuden suurin puute on se, että taulukon sizea ei kasvateta kun valuejen määrä kasvaa liian suureksi. Lisätään ohjelmaan kasvatustoiminnallisuus, mikä tuplaa hajautustaulun sisäisen taulukon koon. Kasvatustoiminnallisuuden tulee myös sijoittaa jokainen hajautustaulussa olevan taulukon value uuteen taulukkoon.

Hahmotellaan kasvatustoiminnallisuuden alku. Kasvatustoiminnallisuudessa luodaan new taulukko, jonka size on edelliseen verrattuna kaksinkertainen. Tämän jälkeen alkuperäinen taulukko käydään index indexltä läpi ja olemassaolevat avain-value -parit kopioidaan uuteen taulukkoon. Lopulta alkuperäinen taulukko korvataan uudella taulukolla.

Alla on hahmoteltu metodin toimintaa. Kopiointia ei ole vielä toteutettu.


```java
private void grow() {
    // luodaan new taulukko
    List<Pari<K, V>>[] new = new List[this.values.length * 2];

    for (int i = 0; i < this.values.length; i++) {
        // kopioidaan vanhan taulukon values uuteen

    }

    // korvataan vanha taulukko uudella
    this.values = new;
}
```

Hahmotellaan seuraavaksi metodia, joka kopioi alkuperäisen taulukon yhden indexn sisältämän myListn values uuteen taulukkoon. Kopioinnin yhteydessä jokaisen kopioitavan avain-value -parin sijainti taulukossa lasketaan uudelleen -- tämä tehdään, sillä taustalla olevan taulukon size kasvaa ja avain-values -parit halutaan sijoittaa taulukkoon mahdollisimman tasaisesti.


```java
private void kopioi(List<Pari<K, V>>[] new, int indexsta) {
    for (int i = 0; i < this.values[indexsta].size(); i++) {
        Pari<K, V> value = this.values[indexsta].value(i);

        int hajautusvalue = Math.abs(value.getAvain().hashCode() % new.length);
        if(new[hajautusvalue] == null) {
            new[hajautusvalue] = new List<>();
        }

        new[hajautusvalue].add(value);
    }
}
```

<quiz id='7fa6ce58-158d-51be-a1c1-f5df803443b5'></quiz>

Nyt kopioi-metodia voidaan kutsua grow-metodista.


```java
private void grow() {
    // luodaan new taulukko
    List<Pari<K, V>>[] new = new List[this.values.length * 2];

    for (int i = 0; i < this.values.length; i++) {
        // kopioidaan vanhan taulukon values uuteen
        kopioi(new, i);
    }

    // korvataan vanha taulukko uudella
    this.values = new;
}
```

Lisätään lopuksi kasvatustoiminnallisuus osaksi lisäystoiminnallisuutta. Hajautustaulun sizea kasvatetaan aina jos hajautustaulussa olevien avain-value -parien määrä on yli 75% taulukon koosta.


```java
public void add(K avain, V value) {
    List<Pari<K, V>> valuesIndeksissa = haeAvaimeenLittyvaLista(avain);
    int index = haeAvaimenIndeksi(valuesIndeksissa, avain);

    if (index < 0) {
        valuesIndeksissa.add(new Pari<>(avain, value));
        this.firstFreeIndex++;
    } else {
        valuesIndeksissa.value(index).setArvo(value);
    }

    if (1.0 * this.firstFreeIndex / this.values.length > 0.75) {
        grow();
    }
}
```


### Poistaminen


Lisätään hajautustauluun vielä toiminnallisuus avain-value -parin removemiseen avaimen perusteella. Poistotoiminnallisuus palauttaa null-valuen mikäli valuea ei löydy, muuten metodi palauttaa poistettavaan avaimeen liittyvän valuen.

Voimme hyödyntää valmiiksi toteuttamiamme metodeja poistotoiminnallisuudessa. Selitä itsellesi (ääneen) alla olevan metodin konkreettinen toiminta.

```java
public V remove(K avain) {
    List<Pari<K, V>> valuesIndeksissa = haeAvaimeenLittyvaLista(avain);
    if (valuesIndeksissa.size() == 0) {
        return null;
    }

    int index = haeAvaimenIndeksi(valuesIndeksissa, avain);
    if (index < 0) {
        return null;
    }

    Pari<K, V> pari = valuesIndeksissa.value(index);
    valuesIndeksissa.remove(pari);
    return pari.getArvo();
}
```

<programming-exercise name='Hash table (3 parts)' tmcname='part12-Part12_05.HashTable' nocoins='1'>

<!-- Toteuta tehtäväpohjaan edellistä esimerkkiä noudattaen luokka Hajautustaulu. Toisin kuin esimerkissä, toteuta luokka siten, että se hyödyntää sisäisessä toteutuksessa Listan sijaan Javan valmista luokkaa ArrayList. Tehtäväpohjassa ei ole testejä -- kokeile myLista materiaalin esimerkkien ja omien kokeilujen avulla. Tehtävä on kolmen pisteen valueinen. -->

Implement the class HashTable in the exercise base, following along the lines of the previous example. Unlike the example, implement the class so that it uses the ready-made Java class ArrayList in its internal implementation. There are no tests in the exercise base -- test its functionality with the examples in the material, and with your own experimentation. This exercise is worth three points.

</programming-exercise>


## Hakemisen tehokkuudesta

Tarkastellaan vielä hakemisen tehokkuutta myListsta ja hajautustaulusta. Tehokkuusmittauksia voi tehdä metodin `System.nanotime()` palauttaman nanosekunteja kuvaavan valuen avulla. Ohjelma luo ensin miljoona alkiota hajautustauluun ja myListan, jonka jälkeen hajautustaulusta ja myListsta etsitään tuhatta satunnaista valuea. Noin 50% valueista löytyy myListlta ja hajautustaulusta.

```java
List<String> myList = new List<>();
Hajautustaulu<String, String> taulu = new Hajautustaulu<>();

for (int i = 0; i < 1000000; i++) {
    myList.add("" + i);
    taulu.add("" + i, "" + i);
}

List<String> haettavat = new List<>();
Random arpoja = new Random();
for (int i = 0; i < 1000; i++) {
    haettavat.add("" + arpoja.nextInt(2000000));
}

long myListnHakuAloitus = System.nanoTime();
for (int i = 0; i < haettavat.size(); i++) {
    myList.contains(haettavat.value(i));
}
long myListnHakuLopetus = System.nanoTime();

long hajautustaulunHakuAloitus = System.nanoTime();
for (int i = 0; i < haettavat.size(); i++) {
    taulu.hae(haettavat.value(i));
}
long hajautustaulunHakuLopetus = System.nanoTime();


long myListnHaku = myListnHakuLopetus - myListnHakuAloitus;
System.out.println("List: haku kesti noin " + myListnHaku / 1000000 + " millisekuntia (" +
    myListnHaku + " nanosekuntia.)");

long hajautustaulunHaku = hajautustaulunHakuLopetus - hajautustaulunHakuAloitus;
System.out.println("Hajautustaulu: haku kesti noin " + hajautustaulunHaku / 1000000 +
    " millisekuntia (" + hajautustaulunHaku + " nanosekuntia.)");
```

```java
List: haku kesti noin 6284 millisekuntia (6284420580 nanosekuntia.)
Hajautustaulu: haku kesti noin 0 millisekuntia (805106 nanosekuntia.)
```


*Edellä kuvatut ja kursseilla käyttämämme myListt ja hajautustaulut poikkeavat toki sisäiseltä toteutukselta hieman toisistaan. Ohjelmointikielten tarjoamissa tietorakenteissa on hieman enemmän erilaisia optimointeja -- näihinkin palataan myöhemmillä kursseilla. Tämän kurssin puitteissa riittää em. tietorakenteiden käyttöosaaminen sekä jonkintasoinen ymmärrys niiden tehokkuuseroista sekä käyttötapauksista.*
