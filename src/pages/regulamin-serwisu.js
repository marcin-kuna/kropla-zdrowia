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

const Regulamin = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="Regulamin serwisu" />
      <SubpageLayout image={fluid} heading="Regulamin serwisu">
        <section className="documents section-center">
          <h2 className="section-title">
            Regulamin Serwisu "Kroplazdrowia.com"
          </h2>
          <div className="documents-container">
            <h3 className="documents-heading">I. POSTANOWIENIA OGÓLNE</h3>
            <ol>
              <li>
                Niniejszy regulamin (dalej jako „Regulamin”) określa zasady
                korzystania serwisu dostępnego pod adresem www.kroplazdrowia.com
                (dalej jako „Serwis”).
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
                Regulamin określa prawa i obowiązki Użytkowników, w tym zarówno
                osób dokonujących Rezerwacji, jak i podejmujących inne działania
                w Serwisie.
              </li>
              <li>
                Regulamin opracowany został w oparciu o obowiązujące przepisy
                prawa, ze szczególnym uwzględnieniem: <br></br> a. ustawy z dnia
                18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (t.j.
                Dz. U. z 2020 r. poz. 344 z późn. zm.);<br></br> b. ustawy z
                dnia 24 listopada 2017 r. o imprezach turystycznych i
                powiązanych usługach turystycznych (t.j. Dz. U. z 2020 r. poz.
                2139 z późn. zm.);<br></br> c. ustawy z dnia 30 maja 2014 r. o
                prawach konsumenta (t.j. Dz. U. z 2020 r. poz. 287 z późn. zm.);
                <br></br>
                d. ustawy z dnia 23 kwietnia 1964 r. Kodeks Cywilny (t.j. Dz. U.
                z 2020 r. poz. 1740 z późn. zm.);<br></br> e. Rozporządzenia
                Parlamentu Europejskiego I Rady (UE) 2016/679 z dnia 27 kwietnia
                2016 r. w sprawie ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                takich danych oraz uchylenia dyrektywy 95/46/we (ogólne
                rozporządzenie o ochronie danych) (Dz. U. UE. L. z 2016 r. Nr
                119, str. 1 z późn. zm.);<br></br> f. ustawy z dnia 10 maja 2018
                r. o ochronie danych osobowych (t.j. Dz. U. z 2019 r. poz.
                1781).
              </li>
              <li>
                Każdy Użytkownik z chwilą podjęcia czynności zmierzających do
                korzystania z Serwisu, zobowiązany jest do przestrzegania
                niniejszego Regulaminu. Akceptacja jego warunków jest
                równoznaczna ze zgodą na zawarcie umowy z Administratorem o
                świadczenie usług drogą elektroniczną.
              </li>
              <li>
                Pozostałe terminy użyte w Regulaminie oznaczają:<br></br> a.
                Użytkownik– osoba korzystająca z Serwisu – osoba fizyczna, która
                posiada pełną zdolność do czynności prawnych; osoba prawna lub
                jednostka organizacyjna nieposiadająca osobowości prawnej, z
                nadanymi prawami do czynności prawnych przez Ustawę,
                korzystająca z Serwisu. Użytkownikiem Serwisu może być także
                osoba, która nie posiada pełnej zdolności do czynności prawnych,
                za zgodą opiekuna prawnego.<br></br> b. Ustawa – ustawa z dnia
                24 listopada 2017 r. o imprezach turystycznych i powiązanych
                usługach turystycznych (t.j. Dz. U. z 2020 r. poz. 2139 z późn.
                zm.).<br></br> c. Ustawa o Prawach Konsumenta – z dnia 30 maja
                2014 r. ustawa o prawach konsumenta (t.j. Dz. U. z 2020 r. poz.
                287 z późn. zm.).<br></br> d. Ustawa o świadczeniu usług drogą
                elektroniczną – ustawa z dnia 18 lipca 2002 r. o świadczeniu
                usług drogą elektroniczną (t.j. Dz. U. z 2020 r. poz. 344 z
                późn. zm.);<br></br> e. Kodeks Cywilny – ustawa z dnia 23
                kwietnia 1964 r. – Kodeks Cywilny (t.j. Dz. U. z 2020 r. poz.
                1740 z późn. zm.).<br></br> f. Umowa – umowa o udział
                wImprezieTurystycznej jako całości lub, jeżeli Impreza
                Turystyczna jest realizowana na podstawie odrębnych umów,
                wszystkie umowy obejmujące poszczególne usługi turystyczne w
                ramach tej samej Imprezy Turystycznej, zawierana pomiędzy
                Użytkownikiem a Administratorem za pośrednictwem Serwisu na
                zasadach określonych w Regulaminie i Warunkach Uczestnictwa.
                <br></br> g. Podróżny (Uczestnik)– każdy, kto chce zawrzeć umowę
                lub jest uprawniony do podróżowania na podstawie Umowy zawartej
                w zakresie stosowania Ustawy.<br></br> h. Impreza (Impreza
                Turystyczna) – połączenie co najmniej dwóch różnych rodzajów
                usług turystycznych na potrzeby tej samej podróży lub wakacji,
                spełniające warunki, o których mowa w art. 5 ust. 1 Ustawy.
                <br></br> i. WarunkiUczestnictwa – Warunki Uczestnictwa w
                imprezach turystycznych organizowanych przez Administratora.
                <br></br> j. System Rezerwacji–internetowy system rezerwacji
                Imprez udostępniony Użytkownikowi w Serwisie, administrowany
                przez Skaleosp. z o.o. z siedzibą w Warszawie (02-886) przy ul.
                Rybałtów 12/40, zarejestrowaną w rejestrze przedsiębiorców
                prowadzonym przez Sąd Rejonowy dla m. st. Warszawy w Warszawie,
                XIII Wydział Gospodarczy Krajowego Rejestru Sadowego pod nr KRS:
                0000841734, NIP: 9512501715, REGON: 386099597.<br></br> k.
                Rezerwacja–złożenie zamówienia na udział w Imprezie Turystycznej
                dostępnej w Serwisie. Rezerwacja jest jednoznaczna z zapoznaniem
                się oraz akceptacją postanowień niniejszego Regulaminu,
                WarunkówUczestnictwa oraz Politykiprywatności.<br></br> l.
                Płatność– opłata za wszystkie usługi turystyczne w ramach
                Imprezy Turystycznej wskazane przez Użytkownika i zestawione w
                Rezerwacji.<br></br> m. Formularz Kontaktowy – elektroniczna
                ścieżka kontaktu z Administratorem w celu złożenia zapytania.
                <br></br> n. Funkcjonalności Serwisu – rodzaje i zakres
                świadczonych usług drogą elektroniczną w Serwisie.<br></br> o.
                Umowa o świadczenie usług Funkcjonalności Serwisu – umowa
                zawierana pomiędzy Użytkownikiem a Administratorem o korzystanie
                z Funkcjonalności Serwisu.
              </li>
              <li>
                Aktualne opisy Imprez zamieszczone w Serwisie nie stanowią
                oferty w rozumieniu art. 66 § 1 Kodeksu Cywilnego, lecz są
                zaproszeniem do zawarcia Umowy.
              </li>
              <li>
                Dane zawarte w opisie Imprez mają charakter informacyjny i mogą
                ulec zmianie przed zawarciem Umowy z zachowaniem określonego w
                art. 40 ust. 3 Ustawy wymogu poinformowania Podróżnego o
                zmianie.
              </li>
            </ol>
            <h3 className="documents-heading">II. FUNKCJONALNOŚCI SERWISU</h3>
            <ol>
              <li>
                Poprzez Serwis Użytkownikom oferowany jest dostęp do Usług oraz
                możliwość korzystania z zawartości Serwisu, zgodnie z
                Regulaminem oraz dodatkowymi warunkami publikowanymi przez
                Administratora.
              </li>
              <li>
                Za dzień zawarcia Umowy o świadczenie usług Funkcjonalności
                Serwisu uznaje się dzień, w którym rozpocznie faktyczne
                korzystanie z Serwisu.
              </li>
              <li>
                Umowa o świadczenie usług Funkcjonalności Serwisu zostaje
                zawarta na czas nieokreślony. Użytkownik, na zasadach
                określonych w Ustawie o Prawach Konsumenta może odstąpić od
                Umowy o świadczenie usług Funkcjonalności Serwisu bez podania
                przyczyny, składając stosowne oświadczenie na w terminie 14
                (słownie: czternastu) dni od dnia jej zawarcia – zgodnie z art.
                27 Ustawy o Prawach Konsumenta. Do zachowania tego terminu
                wystarczy wysłanie oświadczenia na adres siedziby bądź na adres
                e-mail Administratora, określony w ust. 1 powyżej przed jego
                upływem. W przypadku odstąpienia od Umowy o świadczenie usług
                Funkcjonalności Serwisu przez Użytkownika na zasadach
                określonych powyżej, w/w umowę uważa się za niezawartą.
              </li>
              <li>
                W Serwisie świadczone są Usługi umożliwiające dokonanie
                Rezerwacji oraz zawarcie Umowy.
              </li>
              <li>
                Administrator umożliwia Użytkownikowi za pośrednictwem Serwisu
                m.in:<br></br> a. zapoznanie się z Warunkami Uczestnictwa;
                <br></br> b. zapoznanie się z Regulaminem Serwisu;
                <br></br>
                c. zapoznanie się z Polityką Prywatności;<br></br> d. zapoznanie
                się z opisami Imprez Turystycznych;<br></br> e. przejście do
                Systemu Rezerwacji;<br></br> f. sprawdzenie adresu i danych
                kontaktowych Administratora;<br></br> g. przesłanie
                wiadomości/zapytania do Administratora za pośrednictwem
                Formularza Kontaktowego;
              </li>
              <li>
                System Rezerwacji pozwala Użytkownikowi m.in. na:<br></br> a.
                dokonanie Rezerwacji na określone usługi turystyczne dostępne w
                ramach Imprezy wraz z wprowadzeniem danych Uczestników;<br></br>
                b. zapoznanie się z Warunkami Uczestnictwa;<br></br> c.
                zapoznanie się z Regulaminem Serwisu;<br></br> d. zapoznanie się
                z Polityką Prywatności;<br></br> e. dokonanie Płatności.
              </li>
              <li>
                Administrator umożliwia Użytkownikowi otrzymywanie informacji
                przy użyciu urządzeń końcowych (takich jak telefony komórkowe i
                stacjonarne, tablety, komputery) oraz automatycznych systemów
                wywołujących o aktualnych wydarzeniach, konkursach, promocjach,
                komunikatów marketingowych dotyczących usług i produktów
                Administratora na podany przez Użytkownika adres e-mail. Ponadto
                Administrator umożliwia Użytkownikowi otrzymywanie informacji
                handlowych dotyczących towarów lub usług oferowanych przez
                Administratora na wskazany przez Użytkownika adres e-mail. W
                celu otrzymywania informacji, o których mowa powyżej, Użytkownik
                wyraża zgodę na ich otrzymywanie oraz przetwarzanie jego danych
                osobowych we wskazanym powyżej celu poprzez zaznaczenie
                odpowiednich opcji zamieszczonych w Serwisie.
              </li>
              <li>
                Użytkownik może w każdym momencie zrezygnować z otrzymywania
                informacji, o których mowa w ust. 7 powyżej poprzez:<br></br> a.
                kliknięcie odpowiedniego odnośnika w treści wiadomości e-mail;
                <br></br>
                b. przesłanie wiadomości e-mail na adres Administratora z
                żądaniem zaprzestania wysyłania określonych informacji;<br></br>
                c. przesłanie wiadomości za pośrednictwem Formularza
                Kontaktowego dostępnego w Serwisie.
              </li>
            </ol>
            <h3 className="documents-heading">III. REZERWACJE</h3>
            <ol>
              <li>
                W celu dokonania Rezerwacji Użytkownik wybiera opcję „Zapisz
                się” dostępną w opisie Imprezy Turystycznej. Następnie za
                pośrednictwem Systemu Rezerwacji w odpowiednich polach
                formularza podaje dane osobowe: imię i nazwisko, datę urodzenia
                oraz dane kontaktowe: adres, telefon kontaktowy, adres e-mail
                osoby rezerwującej oraz dane osobowei dane kontaktowe
                pozostałych Uczestników, dla których dokonuje Rezerwacji
                Imprezy.
              </li>
              <li>
                Warunkiem niezbędnym do założenia Rezerwacji, jest ukończenie
                przez Użytkownika 18 (słownie: osiemnastu) lat oraz posiadanie
                pełnej zdolności do czynności prawnych.
              </li>
              <li>
                Możliwość Rezerwacji dotyczy Imprez Turystycznych, w opisie
                których opcja „Zapisz się” jest aktywna. W razie wątpliwości co
                do dostępności Imprezy Turystycznej Użytkownik proszony jest o
                kontakt z Administratorem.
              </li>
              <li>
                Rezerwacja następuje po potwierdzeniu przez Uczestnika, że
                zapoznał się niniejszym Regulaminem, Warunkami Uczestnictwa oraz
                Polityką prywatności. Administrator nie ponosi odpowiedzialności
                za skutki podania nieprawdziwych lub niepełnych informacji przez
                Uczestnika.
              </li>
              <li>
                Po potwierdzeniu Rezerwacji przez Administratora w postaci
                wiadomości e-mail zostaje zawarta Umowa z Uczestnikiem. Umowa
                zawierana jest w postaci elektronicznej. Uczestnik przez
                dokonanie wpłaty ceny Imprezy Turystycznej (części lub całości)
                akceptuje warunki Umowy. Szczegółowe warunki zawarcia Umowy w
                szczególności dotyczące płatności, praw i obowiązków
                Uczestników, reklamacji, rezygnacji z Imprezy Turystycznej lub
                zmiany terminu określone są w Warunkach Uczestnictwa.
              </li>
              <li>
                Warunki i sposoby płatności są dostępne w podsumowaniu
                Rezerwacji w Systemie Rezerwacji oraz wiadomości e-mail od
                Administratora.
              </li>
              <li>
                Wszystkie ceny podane na Serwisie są cenami brutto i zawierają
                podatek VAT.
              </li>
              <li>
                Rozliczenia płatności za Imprezę Turystyczną e-przelewem, kartą
                kredytową, systemem Masterpass, PayPal lub innym sposobem,
                przeprowadzane są za pośrednictwem Payu. Przedmiotowe usługi
                świadczy PayU S.A., ul. Grunwaldzka 186, 60-166 Poznań, wpisany
                do Rejestru Przedsiębiorców w Sądzie Rejonowym Katowice – Wschód
                Wydział VIII Gospodarczy Krajowego Rejestru Sądowego pod numerem
                KRS 0000274399, kapitał zakładowy w kwocie 130.100.000,00 zł
                opłacony w całości, NIP: 779-23-08-495, REGON: 300523444. Więcej
                informacji znajduje się na stronie internetowej:
                https://www.payu.com.
              </li>
            </ol>
            <h3 className="documents-heading">IV. ZASTRZEŻENIA PRAWNE</h3>
            <ol>
              <li>
                Wszelkie informacje, dane i materiały udostępniane w ramach
                Serwisusą chronione prawami autorskimi, prawami do znaków
                towarowych, prawami do baz danych lub innymi prawami własności
                intelektualnej.
              </li>
              <li>
                Korzystanie z Serwisu przez Użytkowników może następować
                wyłącznie w celach osobistych i niekomercyjnych. Administrator
                zabrania używania jakichkolwiek zautomatyzowanych systemów lub
                oprogramowania do pozyskiwania danych z Serwisu do celów
                komercyjnych (tzw. „screenscraping”), a także udostępniania lub
                obsługiwania łączy do Serwisu bez uzyskania uprzedniej pisemnej
                zgody Administratora.
              </li>
              <li>
                W przypadku jakiegokolwiek nieupoważnionego korzystania z
                Serwisu, Administrator zastrzega sobie prawo do podjęcia
                wszelkich niezbędnych działań, w tym wystąpienia na drogę
                sądową. W przypadku uzyskania przez Administratora informacji o
                naruszeniach praw do informacji, danych i materiałów
                Administratora wezwie Użytkownika do usunięcia skutków naruszeń
                na koszt Użytkownika. W przypadku niedostosowania się
                użytkownika do wezwania Administratora w terminie 14 (słownie:
                czternastu) dni od daty otrzymania przez Użytkownika wezwania,
                Administrator może wobec niego kierować roszczenia z tytułu
                naruszania praw do informacji, danych i materiałów.
              </li>
              <li>
                Mimo dołożenia wszelkich możliwych starań Administrator nie daje
                gwarancji, że informacje o Imprezie Turystycznej oraz ceny
                wskazane w Serwisie są wolne od uchybień i błędów, które nie
                mogą być jednak podstawą roszczeń.
              </li>
              <li>
                W celu prawidłowego działania Funkcjonalności Serwisu istnieje
                prawdopodobieństwo zamieszczania odwołań hipertekstowych do
                zasobów internetowych należących do podmiotów trzecich. W takim
                przypadku Użytkownik powinien zapoznać się z ograniczeniami
                prawnymi mającymi zastosowanie dla tych zasobów.
              </li>
            </ol>
            <h3 className="documents-heading">V. ODSTĄPIENIE OD UMOWY</h3>
            <ol>
              <li>
                Warunki umożliwiające Podróżnemu odstąpienie od Umowy zawartej
                za pośrednictwem Serwisu oraz procedura odstąpienia następuje
                zgodnie z Warunkami Uczestnictwa.
              </li>
              <li>
                Prawo odstąpienia od Umowy na podstawie Ustawy o Prawach
                Konsumenta zgodnie z art. 38 pkt 12 nie przysługuje
                Uczestnikowi.
              </li>
            </ol>
            <h3 className="documents-heading">VI. REKLAMACJE</h3>
            <ol>
              <li>
                Administrator podejmuje działania w celu zapewnienia w pełni
                poprawnego działania Serwisu, w takim zakresie, jaki wynika z
                aktualnej wiedzy technicznej i zobowiązuje się usunąć w
                rozsądnym terminie wszelkie nieprawidłowości zgłoszone przez
                Użytkowników.
              </li>
              <li>
                Użytkownik zobowiązany jest niezwłocznie powiadomić
                Administratora o wszelkich nieprawidłowościach w funkcjonowaniu
                Serwisu.
              </li>
              <li>
                Nieprawidłowości związane z funkcjonowaniem Serwisu może
                zgłaszać pisemnie na adres: ul. Focha 13/21, 26-600 Radom lub
                mailowo pod adresem kroplazdrowia.obozy@gmail.com.
              </li>
              <li>
                W reklamacji Użytkownik powinien podać swoje imię i nazwisko,
                adres do e-mail korespondencji w przypadku złożenia pisemnej
                reklamacji, rodzaj i datę wystąpienia nieprawidłowości związanej
                z funkcjonowaniem Serwisu.
              </li>
              <li>
                O rozstrzygnięciu reklamacji Użytkownik zostanie poinformowany
                drogą elektroniczną na wskazany w ust. 1 powyżej adres e-mail w
                terminie 30 (trzydziestu) dni od dnia złożenia przedmiotowej
                reklamacji.
              </li>
              <li>
                6. W przypadku zaistnienia sporu pomiędzy Administratorem a
                Użytkownikiem co do zasadności odmowy uwzględnienia reklamacji,
                Użytkownikowi przysługuje prawo skorzystania z pozasądowych
                sposobów rozpatrywania reklamacji i dochodzenia roszczeń.
                Użytkownik może skorzystać z mediacji lub też polubownego
                sądownictwa poprzez dostarczenie do instytucji, przed którą
                będzie toczyło się postępowanie, odpowiedniego formularza –
                wniosku o mediację lub wniosku o rozpatrzenie sprawy przed sądem
                polubownym. Lista przykładowych instytucji wraz z danymi
                teleadresowymi dostępna jest na stronie www.uokik.gov.pl. Pod
                adresem http://ec.europa.eu/consumers/odr dostępna jest
                platforma internetowego systemu rozstrzygania sporów pomiędzy
                konsumentami i przedsiębiorcami na szczeblu unijnym (platforma
                ODR).
              </li>
              <li>
                Reklamacje w zakresie wykonania Umowy należy zgłaszać zgodnie z
                postanowieniami Warunków Uczestnictwa.
              </li>
            </ol>
            <h3 className="documents-heading">
              VII. WSTRZYMANIE LUB ZAKOŃCZENIE ŚWIADCZENIA FUNKCJONALNOŚCI
              SERWISU NA RZECZ UŻYTKOWNIKA
            </h3>
            <ol>
              <li>
                Realizacja Funkcjonalności Serwisu może zostać wstrzymana lub
                całkowicie zakończona, jeżeli Administrator stwierdzi, iż:
                <br></br> a. Użytkownik łamie postanowienia niniejszego
                Regulaminu. Do czasu wyjaśnienia sprawy realizacja
                Funkcjonalności Serwisu może zostać wstrzymana;<br></br> b.
                Użytkownik świadomie lub nieświadomie podejmuje działania, które
                powodują ingerowanie w struktury Serwisu, do których ten
                Użytkownik nie ma dostępu, bądź też działaniami swymi
                destabilizuje funkcjonowanie Serwisu, bez względu na sposób i
                techniki powyższych niedozwolonych działań;<br></br> c.
                Użytkownik podejmuje działania, które winny sposób zostaną
                uznane za szkodliwe dla Administratora, a w szczególności gdy:
                <br></br> • dane podane przez Użytkownika zawierają wyrażenie
                powszechnie uznane za obraźliwe lub niezgodne z dobrymi
                obyczajami;<br></br> • Użytkownik używa wulgaryzmów lub treści
                pornograficznych, rasistowskich lub jakichkolwiek innych
                stanowiących naruszenie powszechnie obowiązujących przepisów
                prawa lub dobrych obyczajów na funkcjonującym w ramach Serwisu
                forum/czacie lub w korespondencji kierowanej do Administratora;
                <br></br>• Serwis wykorzystywany jest do celów niezgodnych z
                jego przeznaczeniem, na szkodę Administratora lub osób trzecich;
                <br></br>• Serwis jest wykorzystywany przez Użytkownika
                niezgodnie zobowiązującym na terenie Rzeczypospolitej Polskiej
                prawem albo niezgodnie z dobrymi obyczajami przyjętymi dla
                korzystania z sieci Internet.
              </li>
              <li>
                Użytkownik, na rzecz którego realizacja Funkcjonalności Serwisu
                została wstrzymana lub zakończona przez Administratora, nie może
                ponownie skorzystać z Funkcjonalności Serwisu bez uprzedniej
                zgody Administratora. Użytkownik traci również prawo do
                wszystkich uzyskanych uprzednio przywilejów i ewentualnych
                promocji dostępnych dla nowych Użytkowników Serwisu.
              </li>
            </ol>
            <h3 className="documents-heading">VIII. POSTANOWIENIA KOŃCOWE</h3>
            <ol>
              <li>Regulamin jest dostępny na stronie internetowej Serwisu.</li>
              <li>
                Administrator zastrzega prawo do zmiany treści niniejszego
                Regulaminu. Zmiany Regulaminu dokonywane będą przez
                Administratora poprzez opublikowanie nowej treści Regulaminu w
                Serwisie. W stosunku do Umów zawartych przed wejściem w życie
                nowych zapisów, zastosowanie mają zapisy Regulaminu obowiązujące
                w momencie zawarcia danej Umowy.
              </li>
              <li>
                Prawem właściwym dla niniejszego Regulaminu jest prawo polskie.
              </li>
              <li>Regulamin obowiązuje od dnia12.05.2021.</li>
            </ol>
          </div>
        </section>
        <SocialLinks styleClass="social-links-fixed" />
      </SubpageLayout>
    </Layout>
  )
}

export default Regulamin
