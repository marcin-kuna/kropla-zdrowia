import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import SocialLinks from "../constants/socialLinks"
import Head from "../components/Head"
import "../styles/dokumenty.scss"
import SubpageLayout from "../components/SubpageLayout"

const query = graphql`
  {
    file(relativePath: { eq: "document.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PolitykaPryw = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="Polityka prywatności" />
      <SubpageLayout image={fluid} heading="Polityka prywatności">
        <section className="documents section-center">
          <h2 className="section-title">POLITYKA PRYWATNOŚCI</h2>
          <div className="documents-container">
            <h3 className="documents-heading">§1 Postanowienia ogólne</h3>
            <ol>
              <li>
                Niniejsza polityka prywatności dotyczy zasad przetwarzania
                danych osobowych przetwarzanych w ramach korzystania ze zbioru
                stron internetowych umieszczonych w domenie
                www.kroplazdrowia.com („Serwis”).
              </li>
              <li>
                Administratorem Serwisu jest Dorota Izbicka prowadząca/y
                jednoosobową działalność gospodarczą pod firmą "KROPLA ZDROWIA -
                USŁUGI REHABILITACYJNE" Dorota Izbicka z siedzibą w Radomiu pod
                adresem ul. Focha 13/21, 26-600 Radom, wpisaną do Centralnej
                Ewidencji i Informacji o Działalności Gospodarczej pod numerem
                NIP 7962261670 oraz REGON 672877464, wpisana do rejestru
                organizatorów turystyki przedsiębiorców ułatwiających nabywanie
                powiązanych usług turystycznych prowadzonym przez Marszałka
                Województwa Mazowieckiego pod numerem 2307, adres e-mail:
                kroplazdrowia.obozy@gmail.com, tel.: (+48) 603 952 902 (dalej
                jako „Administrator").
              </li>
              <li>
                Z Administratorem można skontaktować się pisemnie na adres
                siedziby wskazany powyżej lub pod adresem e-mail:
                kroplazdrowia.obozy@gmail.com.
              </li>
              <li>
                Administrator przestrzega zasad stosowania odpowiednich środków
                techniczno-organizacyjnych określonych w Rozporządzeniu
                Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                2016 r. w sprawie ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                takich danych oraz uchylenia dyrektywy 95/46/WE(„RODO”), w tym w
                szczególności dotyczących odpowiedniego zabezpieczenia danych
                osobowych przed niezgodnym z prawem dostępem, modyfikacją lub
                zniszczeniem danych przez osoby nieuprawnione.
              </li>
              <li>
                W kwestiach nieuregulowanych w niniejszej Polityce Prywatności
                zastosowanie znajdą odpowiednie postanowienia Regulaminu Serwisu
                udostępnionego pod adresem:
                www.kroplazdrowia.com/regulamin-serwisu. Wszelkie pojęcia pisane
                dużą literą a niezdefiniowane w Polityce Prywatności mają
                znaczenie nadane im w Regulaminie Serwisu.
              </li>
              <li>
                Administrator zastrzega sobie prawo do zmiany niniejszej
                Polityki Prywatności w dowolnym czasie, w szczególności z uwagi
                na zmianę funkcjonalności Serwisu lub zmianę obowiązujących
                przepisach prawa.
              </li>
            </ol>
            <h3 className="documents-heading">
              §2 Kategorie, cele i podstawy przetwarzania
            </h3>
            <ol>
              <li>
                Administrator będzie przetwarzał następujące kategorie danych
                użytkowników korzystających z Serwisu („Użytkownicy”):<br></br>{" "}
                a) dane powiązane z zawieranymi umowami i dokonywanymi
                rezerwacjami takie jak imię, nazwisko, dane teleadresowe, dane
                dotyczące podróży, informacje o płatnościach i transakcjach;
                <br></br> b) dane powiązane z kontem w Serwisie imię, nazwisko,
                dane teleadresowe, dane do logowania;<br></br> c) informacje o
                korzystaniu z Serwisu przez Użytkowników, takie jak adres IP,
                urządzenia końcowe, dane o ruchu na stronie.
              </li>
              <li>
                Podane przez Użytkowników dane osobowe będą przetwarzane w
                następujących celach i na następujących podstawach:<br></br> a)
                w celach związanych z zawieraniem i wykonywaniem umów
                zawieranych za pośrednictwem Serwisu i dokonywaniem rezerwacji
                lub do podjęcia działań na żądanie Użytkownika przed zawarciem
                umowy (art. 6 lit. b RODO);<br></br> b) w celu komunikacji z
                Użytkownikami i udzielenia odpowiedzi na otrzymywane od
                Użytkowników wiadomości, np. z formularzy kontaktowych
                dostępnych w Serwisie, co stanowi prawnie uzasadniony interes
                Administratora (art. 6 lit. f RODO),<br></br> c) w celach
                związanych z korzystaniem przez Użytkownika Serwisu, obsługi
                konta w Serwisie, udzielenia wsparcia technicznego, tj. dla
                celów wykonania umowy o korzystanie z Serwisu lub do podjęcia
                działań na żądanie Użytkownika przed zawarciem umowy (art. 6
                ust. 1 lit. b RODO),<br></br> d) w celu w wypełnienia obowiązków
                prawnych ciążących na Administratorze, w szczególności w celach
                księgowo-podatkowych, w związku z ewentualnymi kontrolami lub
                zapytaniami, postępowaniami sądowymi, itd. (art. 6 ust. 1 lit. c
                RODO);<br></br> e) w przypadku otrzymania danych od innego
                Użytkownika, co może mieć miejsce jeśli dane te przetwarzane są
                w celu realizacji rezerwacji dokonanej przez Użytkownika (więcej
                osób na jednej rezerwacji), co stanowi prawnie uzasadniony
                interes Administratora (art. 6 ust. 1 lit. f RODO),<br></br> f)
                w celu ewentualnego ustalenia, dochodzenia lub obrony przed
                roszczeniami, a także w celu zapewnienia bezpieczeństwa ruchu i
                usług, oraz przeciwdziałania nadużyciom i oszustwom co stanowi
                prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f
                RODO),<br></br> g) w celu oferowania produktów i usług
                Administratora, co stanowi prawnie uzasadniony interes
                Administratora w postaci możliwości prowadzenia marketingu
                bezpośredniego (art. 6 ust. 1 lit. f RODO),<br></br> h) w celach
                archiwalnych i dowodowych dla zabezpieczenia informacji na
                wypadek prawnej potrzeby wykazania faktów, w tym dopełnienia
                obowiązku rozliczalności wynikającego z RODO, co jest prawnie
                uzasadnionym interesem Administratora (art. 6 ust. 1 lit. f
                RODO),<br></br> i) w pozostałych przypadkach, tam gdzie
                przewidziano możliwość wyrażenia zgody na przetwarzanie danych
                osobowych, dane będą przetwarzane w zakresie i w celu wyrażonym
                w treści zgody (art. 6 ust. 1 lit. a RODO). Jeżeli Użytkownik
                wyraził zgodę na otrzymywanie komunikatów marketingowych na
                adres e-mail oraz numer telefonu, to podstawą prawną będzie
                także art. 10 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług
                drogą elektroniczną oraz art. 172 ustawy z dnia 16 lipca 2004 r.
                – Prawo telekomunikacyjne.
              </li>
              <li>
                Podanie danych osobowych jest dobrowolne, lecz odmowa ich
                podania uniemożliwi dokonanie rezerwacji, korzystanie z
                funkcjonalności Serwisu czy też otrzymanie odpowiedzi na wysłane
                zapytanie.
              </li>
            </ol>
            <h3 className="documents-heading">§3 Prawa Użytkowników</h3>
            <ol>
              <li>
                Każdemu Użytkownikowi przysługuje prawo do:<br></br> a) dostępu
                do swoich danych oraz otrzymania ich kopii,<br></br> b)
                sprostowania (poprawiania) swoich danych,<br></br> c) usunięcia
                danych, jeśli jest to dopuszczalne na gruncie RODO,<br></br> d)
                ograniczenia przetwarzania danych, w takim zakresie jakim
                zezwala na to RODO,<br></br> e) wniesienia sprzeciwu wobec
                przetwarzania danych przetwarzanych w celu realizacji prawnie
                uzasadnionego interesu Administratora lub osoby trzeciej, w tym
                prowadzenia marketingu bezpośredniego, a także, gdy
                przetwarzanie jest niezbędne Administratorowi do wykonania
                zadania realizowanego w interesie publicznym lub do sprawowania
                powierzonej Administratorowi władzy publicznej,<br></br> f)
                przenoszenia danych na warunkach określonych w RODO,<br></br> g)
                wniesienia skargi do organu nadzorczego – jeżeli Użytkownik
                uważa, że Administrator przetwarza jego dane niezgodnie z
                prawem, może złożyć w tej sprawie skargę do Prezesa Urzędu
                Ochrony Danych Osobowych,<br></br> h) cofnięcia zgody na
                przetwarzanie danych osobowych – w każdej chwili Użytkownik ma
                prawo cofnąć zgodę na przetwarzanie tych danych osobowych, które
                Administrator przetwarza na podstawie jego zgody; cofnięcie
                zgody nie będzie wpływać na zgodność z prawem przetwarzania,
                którego dokonano na podstawie zgody przed jej wycofaniem.
              </li>
            </ol>
            <h3 className="documents-heading">
              §4 Okres przechowywania danych
            </h3>
            <ol>
              <li>
                Dane osobowe będą przechowywane przez okres niezbędny do
                zrealizowania celów, dla których zostały zebrane, tj.:<br></br>
                a) w przypadku realizacji umów oraz rezerwacji na czas zgodny z
                przepisami prawa (do upływu terminów dochodzenia roszczeń oraz
                do upływu okresów wyznaczonych przepisami prawa na
                przechowywanie dokumentów księgowych),<br></br> b) w przypadku
                korzystania z Serwisu, a także po zakończeniu przez Użytkownika
                korzystania z Serwisu na czas zgodny z przepisami prawa (do
                upływu terminów dochodzenia roszczeń oraz do upływu okresów
                wyznaczonych przepisami prawa na przechowywanie dokumentów
                księgowych),<br></br> c) w przypadku danych przetwarzanych na
                podstawie zgody Użytkownika - do czasu cofnięcia zgody, z tym
                zastrzeżeniem, że jeśli Użytkownik cofnie zgodę lub usunie dane
                w Serwisie, Administrator może w dalszym ciągu przetwarzać te
                dane, które są niezbędne do wykonania wcześniej zawartych umów,
                <br></br>
                d) w przypadku gdy dane osobowe będą przetwarzane w celu
                realizacji prawnie uzasadnionych interesów Administratora lub
                osoby trzeciej, o których mowa w niniejszej Polityce
                Prywatności, przez okres do czasu realizacji tych interesów lub
                wniesienia sprzeciwu wobec takiego przetwarzania, o ile nie
                zajdzie sytuacja, w której RODO dopuszcza dalsze przetwarzanie
                danych,<br></br> e) w zakresie realizacji obowiązku prawnego
                ciążącego na Administratorze przez okres i w zakresie wymaganym
                przez przepisy prawa, a po tym czasie przez okres wynikający z
                przepisów prawa lub dla realizacji uzasadnionych interesów
                Administratora, w tym dla zabezpieczenia i dochodzenia
                ewentualnych roszczeń.
              </li>
            </ol>
            <h3 className="documents-heading">§5 Odbiorcy danych</h3>
            <ol>
              <li>
                Dostęp do danych osobowych Użytkowników mogą mieć:<br></br> a)
                towarzystwa ubezpieczeniowe, linie lotnicze, hotele,
                organizatorzy turystyki oraz inne podmioty współpracujące przy
                realizacji zawartych z Użytkownikami umów, mogące być w tym
                zakresie odrębnymi administratorami danych,<br></br> b) podmioty
                w zakresie realizacji procesów płatności dostępnych w Serwisie –
                operatorzy płatności, mogący być w tym zakresie odrębnymi
                administratorami danych,<br></br> c) dostawcy usług zaopatrujący
                Administratora w rozwiązania techniczne i organizacyjne, w
                szczególności podmioty świadczące usługi w obszarze IT,
                hostingu, marketingu, analityki,<br></br> d) biura księgowe,
                doradcy podatkowi, podmioty świadczące pomoc prawną,<br></br> e)
                właściwe organy państwa, w oparciu o obowiązujące przepisy
                prawa.
              </li>
              <li>
                Administrator nie będzie przekazywać ani zezwalać na
                przekazywanie danych osobowych poza terytorium Europejskiego
                Obszaru Gospodarczego z wyjątkiem podmiotów wobec których
                podjęte zostaną środki niezbędne do zapewnienia, że przekazanie
                jest zgodne z RODO. Przedmiotowe środki mogą obejmować w
                szczególności przekazywanie danych osobowych odbiorcy w kraju,
                który zgodnie z decyzją Komisji Europejskiej, zapewnia
                odpowiednią ochronę danych osobowych, bądź przekazanie danych
                osobowych odbywać się będzie z zastrzeżeniem odpowiednich
                zabezpieczeń, o których mowa w art. 46 RODO.
              </li>
            </ol>
            <h3 className="documents-heading">§6 Polityka plików Cookies</h3>
            <ol>
              <li>
                W Serwisie mogą być stosowane pliki cookies (tzw. „ciasteczka”)
                obejmujące dane informatyczne, w szczególności pliki tekstowe,
                które przechowywane są w urządzeniu końcowym Użytkownika. Pliki
                cookies może stosować Administrator jak i podmioty trzecie
                mogące być w tym zakresie odrębnymi administratorami.
              </li>
              <li>
                W Serwisie stosowane są zasadniczo dwa typy plików cookies, tj.
                cookies „sesyjne” stanowiące pliki tymczasowe, które
                przechowywane są w urządzeniu końcowym Użytkownika do czasu
                wylogowania, opuszczenia Serwisu lub wyłączenia oprogramowania
                (właściwej przeglądarki internetowej) oraz cookies „stałe” –
                stanowiące pliki przechowywane w urządzeniu końcowym Użytkownika
                przez czas określony w parametrach plików cookies lub do czasu
                ich usunięcia przez Użytkownika.
              </li>
              <li>
                W Serwisie wykorzystywane mogą być następujące rodzaje plików
                cookies:<br></br> a) „niezbędne” pliki cookies, umożliwiające
                korzystanie z usług dostępnych w ramach Serwisu, np.
                uwierzytelniające pliki cookies wykorzystywane do usług
                wymagających uwierzytelniania w ramach Serwisu;<br></br> b)
                pliki cookies służące do zapewnienia bezpieczeństwa, np.
                wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania
                w ramach Serwisu;<br></br> c) „funkcjonalne” pliki cookies,
                umożliwiające „zapamiętanie” wybranych przez Użytkownika
                ustawień i personalizację interfejsu Użytkownika, np. w zakresie
                wybranego języka lub regionu, z którego pochodzi Użytkownik,
                rozmiaru czcionki, wyglądu strony internetowej itp.;<br></br> d)
                „reklamowe” pliki cookies, umożliwiające dostarczanie
                Użytkownikom treści reklamowych bardziej dostosowanych do ich
                zainteresowań;<br></br> e) „wydajnościowe” pliki cookies,
                umożliwiające zbieranie informacji o sposobie korzystania ze
                stron internetowych Serwisu.
              </li>
              <li>
                Użytkownicy mogą dokonać w każdym czasie zmiany ustawień
                dotyczących plików cookies za pomocą zmiany ustawień
                przeglądarki internetowej. Ustawienia te mogą zostać zmienione w
                szczególności w taki sposób, aby blokować automatyczną obsługę
                plików cookies bądź informować o ich każdorazowym zamieszczeniu
                w urządzeniu Użytkownika. Szczegółowe informacje o możliwości i
                sposobach obsługi plików cookies dostępne są w ustawieniach
                oprogramowania (przeglądarki internetowej) np. na poniższych
                stronach:<br></br> a)
                Firefox:http://support.mozilla.org/pl/kb/ciasteczka,<br></br> b)
                Internet Explorer:
                https://support.microsoft.com/pl-pl/topic/usuwanie-plik%C3%B3w-cookie-i-zarz%C4%85dzanie-nimi-168dab11-0753-043d-7c16-ede5947fc64d,
                <br></br>
                c) Chrome:
                http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647,
                <br></br>
                d) Opera: http://help.opera.com/Linux/12.10/pl/cookies.html,
                <br></br> e) Safari:
                http://support.apple.com/kb/HT1677?viewlocale=pl_PL&locale=pl_PL
              </li>
            </ol>
            <h3 className="documents-heading">§7 Postanowienia końcowe</h3>
            <ol>
              <li>
                Niniejsza polityka prywatności obowiązuje od dnia 12.05.2021.
              </li>
            </ol>
          </div>
        </section>
        <SocialLinks styleClass="social-links-fixed" />
      </SubpageLayout>
    </Layout>
  )
}

export default PolitykaPryw
