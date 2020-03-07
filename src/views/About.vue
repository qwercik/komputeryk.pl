<template>
  <div class="about">
    <h2 class="title">Kilka słów na mój temat</h2>
    <p>
      Mam na imię Eryk, jestem pasjonatem szeroko pojętej informatyki i komputerów - stąd też wziął się pomysł na nazwę tej strony ;)
    </p>
    <p>
      Pochodzę z południowej Wielkopolski, gdzie z wyróżnieniem ukończyłem technikum informatyczne.
      Obecnie można spotkać mnie przede wszystkim w Poznaniu, gdzie studiuję Informatykę na Politechnice Poznańskiej.
    </p>
    <p>
      Komputery fascynowały mnie praktycznie od zawsze. Pierwszą styczność z programowaniem miałem pod koniec szkoły podstawowej, ale świadomie programować zacząłem na początku gimnazjum.
      Od tego czasu poznaję w węższym, bądź szerszym zakresie różne języki i technologie. Aby dowiedzieć się więcej na temat moich umiejętności, zapraszam na podstronę <router-link to="/umiejetnosci">Umiejętności</router-link>.
    </p>
    <p>
      Nie samym komputerem żyje człowiek ;) W wolnych chwilach bardzo lubię wyciszyć się w okolicznościach przyrody, na przykład jeżdżąc na rowerze, wędrując po górach i przy tym fotografując (aby zobaczyć kilka moich amatorskich zdjęć, zajrzyj do mojej <router-link to="/galeria">Galerii</router-link>).
      Gram również na instrumentach klawiszowych. Lubię matematykę i wyzwania umysłowe, na przykład grę w szachy - jeżeli chcesz zagrać ze mną partyjkę, to <a href="https://lichess.org/@/erykandrzejewski">zapraszam</a>.
    </p>
  </div>
</template>

<style lang="scss">
a {
  color: $mainFont;
  transition: color 0.5s;
  &:hover {
    color: $highlight;
  }
}

.about {
  text-align: center;
  width: 80%;

  @include mq($until: tablet) {
    width: 100%;
  }
}

.title {
  font-size: 2em;
}
</style>
