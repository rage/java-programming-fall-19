---
path: "/netbeans-installation-guide"
title: "NetBeans installation guide"
hidden: false
information_page: true
---

  <p>
    You will have to install both Java and NetBeans TMC-environment.
  </p>

## Installing NetBeans for Windows

<h3>1. Installing Java </h3>
  <p>
  <strong>NB! The latest Java 8 development environment (8u231) might result in "Malformed argument has embedded quote" notice when building / running projects.</strong> To fix the issue, you might want to ensure that the JDK you have install predates that version (so 8u221 or earlier). If you want to use the latest JDK, you can also append "-J-Djdk.lang.Process.allowAmbiguousCommands=true" to the default_options in "tmcbeans/etc/tmcbeans.conf" (in the folder where you have installed tmcbeans).
  </p>
  <p>
    Download the Java 8 development environment (Java SE Development Kit 8u221) from address <a href="https://www.oracle.com/java/technologies/jdk8-downloads.html">https://www.oracle.com/java/technologies/jdk8-downloads.html</a>. It is very likely you are using 64-bit version of Windows, hence download the file <code>jdk-8u221-windows-x64.exe</code>. Once you've downloaded the file, install it on your computer. (Older versions than 8u221 should work, too).
  </p>

  <p>
      Note, you will have to create yourself an Oracle-account, which requires a name of the company. You may put to all fields, which you don't know the input for, for example "Lolled Corporation Ltd"
  </p>
  <div class="embed-container">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wR1vECnJAag?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>

  <p>If you have other versions of Java installed, they may prevent IDE from working properly. In this case, we recommend removing all other Java versions. Especially versions 9, 10 and 11 are problematic. </p>

  <h3>2. Installing NetBeans with TMC </h3>

  <p>Download the file <a href="http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-windows.exe">http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-windows.exe</a>. Once the file is downloaded, install it on your computer.</p>
  <div class="embed-container">
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Mwe2vuONhZc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>

<!-- <h3> JAVA_HOME -problem </h3>

<p>If you encounter "ERROR: Compilation failed" -error when you're running tests on NetBeans, look at the following instructions to fix the error: <%= link_to 'JAVA_HOME virhe testejä ajaessa', 'java_home_not_found.html' %></p> -->

<br/>
<br/>
<br/>
<br/>

<h2>Installing NetBeans for macOS</h2>

<h3>1. Installing Java</h3>

  <p>
  **NB! The latest Java 8 development environment (8u231) might result in "Malformed argument has embedded quote" notice when building / running projects.** To fix the issue, you might want to ensure that the JDK you have install predates that version (so 8u221 or earlier). If you want to use the latest JDK, you can also append "-J-Djdk.lang.Process.allowAmbiguousCommands=true" to the default_options in "tmcbeans/etc/tmcbeans.conf" (in the folder where you have installed tmcbeans).
  </p>
  <p>
    Download the latest Java 8 development environment (Java SE Development Kit 8u221) from address <a href="https://www.oracle.com/java/technologies/jdk8-downloads.html">https://www.oracle.com/java/technologies/jdk8-downloads.html</a>. Download file <code>jdk-8u221-macosx-x64.dmg</code>. Once you've downloaded the file, install it on your computer. (older versions than 8u221 should work, too).
  </p>

  <p>
    Note, you will have to create yourself an Oracle-account, which requires a name of the company. You may put to all fields, which you don't know the input for, for example "Lolled Corporation Ltd"
  </p>

  <p>If you have other versions of Java installed, they may prevent IDE from working properly. In this case, we recommend removing all other Java versions. Especially versions 9, 10 and 11 are problematic. </p>

  <h3>2. Installing NetBeans with TMC </h3>

  <p>Download the file <a href="http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-macosx.tgz">http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-macosx.tgz</a>. Once the download is ready, install it on your computer.</p>

  <p>
    If the downloaded installation program doesn't seem to open, try opening it with by pressing with the right side of the mouse and selecting 'Open'.
  </p>

  <!-- <h3>2.1 Fixing internet connection on macOS </h3> -->

  <!-- <p>
    Follow the following instruction so that NetBeans may have an access to the Internet: <a href="https://materiaalit.github.io/tmc-asennus/macos-verkkoongelma/">Instructions</a>.
  </p> -->


  <br/>
  <br/>
  <br/>
  <br/>

  <h2> Installation for linux </h2>

  <h3> 1. Installing Java </h3>

  <p>
    We recommend installing OpenJDK package in linux. For example, you may execute the following command:

    sudo apt-get install openjdk-8-jdk
  </p>

  <p>If you have other versions of Java installed, they may prevent IDE from working properly. In this case, we recommend removing all other Java versions. Especially versions 9, 10 and 11 are problematic. </p>

  <p> Change the active version of Java with command:

      sudo update-alternatives --config java
  </p>

  <p>Type the option number, which has Java 8 written in it (e.g. in the writer's computer "/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java"), and press enter. </p>

  <p>
    After this, install OpenJFX, which is used to create and handle graphical user interfaces. This can be done in ubuntu (terminal) with a command:

    sudo apt-get install openjfx
  </p>

  <h3>2. Installing NetBeans with TMC</h3>

  <p>
      Download the file <a href="http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-linux.sh">http://update.testmycode.net/installers/tmc-netbeans_org_mooc/tmc-netbeans_org_mooc_tmcbeans-linux.sh</a>. When the download is ready, double click the file. If this doesn't work, navigate to the folder where the downloaded file is and run command:

      chmod +x tmc-netbeans_org_mooc_tmcbeans-linux.sh && ./tmc-netbeans_org_mooc_tmcbeans-linux.sh
  </p>

  <p>
    After this, follow the instructions that have appeared to the screen.
  </p>

