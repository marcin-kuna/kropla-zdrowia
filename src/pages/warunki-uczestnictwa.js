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

const Warunki = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <Head title="Warunki uczestnictwa" />
      <SubpageLayout image={fluid} heading="Warunki uczestnictwa">
        <section className="documents section-center">
          <h2 className="section-title">
            Warunki uczestnictwa<br></br>w imprezach turystycznych
            organizowanych przez www.kroplazdrowia.com
          </h2>
          <div className="documents-container">
            <h3 className="documents-heading">I. ZASADY OGÓLNE</h3>
            <ol>
              <li>
                Organizatorem turystyki w rozumieniu ustawy z dnia 24 listopada
                2017 r. o imprezach turystycznych i powiązanych usługach
                turystycznych (tekst jedn. Dz. U. z 2020 r. poz. 2139 z późn.
                zm.; dalej jako „ustawa o imprezach turystycznych”) jest Dorota
                Izbicka prowadząca/y jednoosobową działalność gospodarczą pod
                firmą "KROPLA ZDROWIA - USŁUGI REHABILITACYJNE" Dorota Izbicka z
                siedzibą w Radomiu pod adresem ul. Focha 13/21, 26-600 Radom,
                wpisaną do Centralnej Ewidencji i Informacji o Działalności
                Gospodarczej pod numerem NIP 7962261670 oraz REGON 672877464,
                wpisana do rejestru organizatorów turystyki przedsiębiorców
                ułatwiających nabywanie powiązanych usług turystycznych
                prowadzonym przez Marszałka Województwa Mazowieckiego pod
                numerem 2307, adres e-mail: kroplazdrowia.obozy@gmail.com, tel.:
                (+48) 603 952 902(dalej jako „Organizator").
              </li>
              <li>
                Prawa i obowiązki Organizatora oraz Podróżnych określają
                niniejsze Warunki Uczestnictwa w imprezach turystycznych
                organizowanych przez Organizatora (dalej jako „Warunki
                Uczestnictwa”), przepisy ustawy z dnia z dnia 23 kwietnia 1964
                r. – Kodeks cywilny(tekst jedn. Dz. U. z 2020 r. poz. 1740 z
                późn. zm.; dalej jako „k.c.”) oraz przepisy ustawy o imprezach
                turystycznych.
              </li>
              <li>
                Ilekroć w treści Warunków Uczestnictwa mowa jest o:<br></br> a)
                Usłudze Turystycznej – rozumie się przez to usługę turystyczną,
                zgodnie z definicją z art. 4 pkt 1 ustawy o imprezach
                turystycznych,<br></br> b) Imprezie turystycznej– rozumie się
                przez to imprezę turystyczną, zgodnie z definicją z art. 4 pkt 2
                ustawy o imprezach turystycznych,<br></br> c) Umowie – rozumie
                się przez to umowę o udział w imprezie turystycznej, zgodnie z
                definicją z art. 4 pkt 3 ustawy o imprezach turystycznych,
                zawieraną pomiędzy Organizatorem a Podróżnym, d)<br></br>{" "}
                Podróżnym – rozumie się przez to podróżnego, zgodnie z definicją
                z art. 4 ust. 6 ustawy o imprezach turystycznych.
              </li>
              <li>
                Zawarte w serwisie www.kroplazdrowia.com opisy Imprez
                turystycznych nie stanowią oferty w rozumieniu art. 66 § 1 k.c.,
                lecz są zaproszeniem do zawarcia Umowy. Dane zawarte w opisie
                Imprez turystycznych mają charakter informacyjny i mogą ulec
                zmianie przed zawarciem Umowy z zachowaniem określonego w art.
                40 ust. 3 ustawy o imprezach turystycznych wymogu poinformowania
                Podróżnego o zmianie.
              </li>
              <li>
                Organizator i Podróżny przekazują sobie wymagane ustawą o
                imprezach turystycznych lub Umową informacje, oświadczenia i
                materiały za potwierdzeniem odbioru w sposób odpowiedni do
                rodzaju uzgodnionego przez strony trwałego nośnika. Informacje
                lub oświadczenia przekazane ustnie powinny być zapisane na
                trwałym nośniku. Jeżeli ustawa o imprezach turystycznych wymaga
                przekazania Podróżnemu informacji lub oświadczenia na określonym
                nośniku – zostanie użyty nośnik wskazany w ustawie o imprezach
                turystycznych.
              </li>
            </ol>
            <h3 className="documents-heading">II. Zawarcie Umowy</h3>
            <ol>
              <li>
                Zawarcie umowy o udział w imprezie turystycznej organizowanej
                przez Organizatora (dalej jako„Umowa”) następuje poprzez
                dokonanie przez Podróżnego rezerwacji za pośrednictwem
                formularza zgłoszeniowego udostępnionego w serwisie
                www.kroplazdrowia.com (dalej jako „Formularz”) oraz dokonanie
                zapłaty zaliczki lub całości wynagrodzenia za udział w Imprezie
                turystycznej.
              </li>
              <li>
                Przed zawarciem Umowy udziela się Podróżnemu:<br></br> a)
                standardowych informacji za pośrednictwem odpowiedniego
                standardowego formularza informacyjnego (dalej jako „formularz
                SFI”) zgodnie z art. 39 ust. 1 ustawy o imprezach turystycznych,
                stanowiącego załącznik 1 lub 2 do wspomnianej ustawy;<br></br>
                b) w sposób jasny, zrozumiały i widoczny, nie wprowadzając
                Podróżnego w błąd informacji określonych w art. 40 ust. 1 i 3
                ustawy o imprezach turystycznych (dalej jako „Informacje o
                Imprezie”).
              </li>
              <li>
                Przed zawarciem Umowy Organizator może zmienić informacje
                przekazane Podróżnemu zgodnie z art. 40 ust. 1 oraz ust. 3
                ustawy o imprezach turystycznych informując go w sposób jasny,
                zrozumiały i widoczny o każdej zmianie Informacji o Imprezie.
              </li>
              <li>
                W przypadku zawierania Umowy za pośrednictwem strony
                www.kroplazdrowia.com Podróżny potwierdza, iż przed dokonaniem
                rezerwacji udzielone mu zostały wymagane ustawą o imprezach
                turystycznych informacje za pośrednictwem formularza SFI, a
                przed zawarciem Umowy również Informacje o Imprezie.
              </li>
              <li>
                W chwili zawarcia Umowy lub niezwłocznie po jej zawarciu
                udostępnia się Podróżnemu za pośrednictwem wskazanego przez
                Podróżnego adresu e-mail kopię Umowy lub potwierdzenie jej
                zawarcia.
              </li>
              <li>
                Umowa lub potwierdzenie jej zawarcia zawiera udzielone
                Podróżnemu przed zawarciem Umowy Informacje o Imprezie, a także
                pełną treść uzgodnień między stronami Umowy oraz dane i
                informacje określone w art. 42 ust. 4 ustawy o imprezach
                turystycznych.
              </li>
              <li>
                Przed rozpoczęciem Imprezy turystycznej Organizator dostarcza
                Podróżnemu niezbędne pokwitowania, vouchery i bilety oraz
                informacje o planowanym czasie wyjazdu i – w stosownych
                przypadkach – terminie odprawy, a także o planowanych godzinach
                przystanków pośrednich, połączeń transportowych i przyjazdu.
              </li>
              <li>
                Zawarcie Umowy następuje po zapoznaniu się przez Podróżnego z
                programem Imprezy turystycznej i Warunkami Uczestnictwa. Poprzez
                uiszczenie zaliczki lub całości wynagrodzenia za udział w
                Imprezie turystycznej, Podróżny potwierdza znajomość
                wymienionych zasad i oświadcza, że je akceptuje.
              </li>
              <li>
                W Imprezie turystycznej uczestniczy Podróżny zawierający Umowę
                i/lub inne osoby przez niego wymienione w Formularzu. Podróżnemu
                przysługuje prawo przeniesienia uprawnień i obowiązków
                wynikających z Umowy na inną osobę oraz na zmianę danych osób
                uczestniczących w Imprezie turystycznej bez zmiany ich ilości. W
                takim przypadku, Podróżny zobowiązuje się powiadomić o tym
                fakcie Organizatora nie później niż 7 dni przed rozpoczęciem
                Imprezy turystycznej. W przypadku zmiany osoby Podróżnego,
                dotychczasowy Podróżny zobowiązany jest do zwrotu dokumentów
                otrzymanych od Organizatora.
              </li>
              <li>
                Zgłoszenie uczestnictwa osoby niepełnoletniej wymaga
                potwierdzenia jej uczestnictwa przez jej opiekuna prawnego.
              </li>
              <li>
                Za szkody wyrządzone podczas Imprezy turystycznej przez osoby
                małoletnie odpowiadają rodzice lub opiekunowie prawni.
              </li>
            </ol>
            <h3 className="documents-heading">III. Warunki płatności</h3>
            <ol>
              <li>
                Wszystkie ceny są cenami umownymi, obejmującymi podatek od
                towarów i usług. Cena Imprezy turystycznej jest ustalona na
                podstawie obowiązujących taryf, cen, opłat i kursów walut. Cena
                Imprezy turystycznej nie obejmuje kosztów uzyskania paszportu,
                wizy, szczepień ochronnych, dodatkowych ubezpieczeń, a
                odpowiedzialność za ich uzyskanie spoczywa na Podróżnym.
              </li>
              <li>
                Podróżny zobowiązany jest w ciągu 24 godzin od momentu
                otrzymania wiadomości e-mail z potwierdzeniem dokonania
                rezerwacji od Organizatora dokonać zapłaty zaliczki lub całości
                ceny za udział w Imprezie turystycznej. Przy rezerwacji na mniej
                niż 21 dni przez datą rozpoczęcia Imprezy turystycznej, Podróżny
                musi wpłacić pełną kwotę ceny w ciągi 24 godzin od momentu
                otrzymania wiadomości e-mail z potwierdzeniem dokonania
                rezerwacji od Organizatora. Po bezskutecznym upływie wskazanych
                powyżej terminów rezerwacja zostanie anulowana.
              </li>
              <li>
                W przypadku uiszczenia przez Podróżnego zaliczki w momencie
                zawierania Umowy, Podróżny w terminie określonym w Umowie wpłaca
                pozostałą kwotę ceny za udział w Imprezie turystycznej.
              </li>
              <li>
                Organizator zastrzega sobie prawo rozwiązania Umowy z Podróżnym,
                którego wpłaty nie zostaną przekazane na rachunek bankowy
                Organizatora w terminach wskazanych powyżej.
              </li>
              <li>
                W przypadku Imprezy turystycznej, której cena podana jest w
                innych walutach niż polska, cena przeliczana jest na złotówki
                według kursu określonej waluty w NBP (pieniądz-sprzedaż) z dnia
                dopłaty do pełnej kwoty.
              </li>
              <li>
                Wszelkie zwroty pieniężne będą przekazywane wyłącznie na
                wskazane konto bankowe lub w formie przekazu pocztowego na adres
                Podróżnego podany w treści Formularza.
              </li>
              <li>
                Podróżny dokonujący rezerwacji Imprezy turystycznej (pierwsza
                osoba wymieniona w Formularzu) przyjmuje na siebie
                odpowiedzialność za zapłatę całej ceny Imprezy turystycznej za
                wszystkie osoby wymienione w Formularzu, jak również jest
                odpowiedzialna za przekazywanie pozostałym osobom otrzymanych od
                Organizatora oświadczeń dotyczących Imprezy turystycznej, a
                także za przekazywanie Organizatorowi w imieniu tych osób
                informacji i oświadczeń związanych z Imprezą turystyczną.
              </li>
            </ol>
            <h3 className="documents-heading">
              IV. Zmiany świadczeń przed rozpoczęciem Imprezy turystycznej
            </h3>
            <ol>
              <li>
                Organizator ma prawo do nieznacznej zmiany warunków Umowy przed
                rozpoczęciem Imprezy turystycznej po uprzednim poinformowaniu o
                tym Podróżnego w sposób jasny, zrozumiały i widoczny na trwałym
                nośniku zgodnie z art. 46 ust. 1 ustawy o imprezach
                turystycznych.
              </li>
              <li>
                W sytuacji, gdy Organizator przed rozpoczęciem Imprezy
                turystycznej jest zmuszony zmienić główne właściwości Imprezy
                turystycznej w rozumieniu art. 46 ust. 2 pkt 1 ustawy o
                imprezach turystycznych bądź nie jest w stanie spełnić
                specjalnych wymagań (na których spełnienie strony wyraziły zgodę
                w Umowie) w rozumieniu art. 46 ust. 2 pkt 2 ustawy o imprezach
                turystycznych niezwłocznie powiadomi o tym Podróżnego na trwałym
                nośniku. Organizator może w tym wypadku jednocześnie zaoferować
                Podróżnemu zastępczą Imprezę turystyczną, w miarę możliwości o
                tej samej lub wyższej jakości.
              </li>
              <li>
                W powiadomieniu, o którym mowa w ust. 2 powyżej, Organizator
                informuje Podróżnego o:<br></br> a) zmianach warunków Umowy oraz
                o ewentualnym wpływie tych zmian na cenę;<br></br> b) rozsądnym
                terminie, w którym Podróżny ma poinformować Organizatora o
                swojej decyzji (tj. czy Podróżny przyjmuje proponowaną zmianę
                Umowy albo odstępuje od Umowy za zwrotem wszystkich wniesionych
                wpłat i bez obowiązku wniesienia opłaty za odstąpienie, albo
                odstępuje od Umowy oraz przyjmuje zastępczą Imprezę
                turystyczną);<br></br> c) o odstąpieniu od Umowy za zwrotem
                wszystkich wniesionych wpłat i bez obowiązku wniesienia opłaty
                za odstąpienie od Umowy w przypadku braku odpowiedzi Podróżnego
                w podanym przez Organizatora terminie;<br></br> d) o zastępczej
                Imprezie turystycznej oraz jej cenie, jeśli jest oferowana.
                Jeżeli zmiany Umowy lub zastępcza Impreza turystyczna, prowadzą
                do obniżenia jakości lub kosztów Imprezy turystycznej, Podróżny
                jest uprawniony do odpowiedniego obniżenia ceny. W przypadku gdy
                Umowa zostanie rozwiązana w związku z odstąpieniem Podróżnego na
                warunkach określonych powyżej, Organizator nie później niż w
                terminie 14 (słownie: czternaście) dni od dnia rozwiązania Umowy
                zwraca wpłaty dokonane przez Podróżnego lub w jego imieniu.
                Podróżny w takich wypadkach jest zwolniony od wniesienia opłaty
                za odstąpienie od Umowy. Odpowiednie zastosowanie mają
                postanowienia rozdziału XI niniejszych Warunków Uczestnictwa.
              </li>
              <li>
                Zmiana przewoźnika lotniczego, godzin wylotów/przylotów i
                wyjazdów lub powrotów (o ile nie zmienia się ilość świadczeń)
                nie stanowią zmiany głównych właściwości Imprezy turystycznej w
                rozumieniu art. 46 ust. 2 pkt 1 ustawy o imprezach
                turystycznych.
              </li>
            </ol>
            <h3 className="documents-heading">
              V. Zmiany świadczeń po rozpoczęciu Imprezy turystycznej
            </h3>
            <ol>
              <li>
                Jeżeli którakolwiek z Usług Turystycznych nie jest wykonywana
                zgodnie z Umową Podróżny ma obowiązek zawiadomić o tym
                Organizatora (patrz rozdział X niniejszych Warunków
                Uczestnictwa).
              </li>
              <li>
                Organizator usuwa niezgodność, chyba że jest to niemożliwe albo
                wiąże się z kosztami, które są niewspółmiernie wysokie w
                stosunku do zakresu niezgodności i wartości Usług Turystycznych,
                których one dotyczą. W przypadku nieusunięcia niezgodności
                odpowiednie zastosowanie ma rozdział X i XI Warunków
                Uczestnictwa oraz przepisy ustawy o imprezach turystycznych.
              </li>
              <li>
                W przypadku gdy niemożliwe jest zapewnienie powrotu Podróżnego
                do kraju zgodnie z Umową z powodu nieuniknionych i
                nadzwyczajnych okoliczności, Organizator ponosi koszty
                niezbędnego zakwaterowania Podróżnego, w miarę możliwości o
                kategorii równoważnej do określonej w Umowie przez okres do 3
                (słownie: trzech) nocy.
              </li>
              <li>
                Ograniczenia czasu zapewniania Podróżnemu niezbędnego
                zakwaterowania, o którym mowa w ust. 3, nie stosuje się w
                przypadku osób o ograniczonej sprawności ruchowej, zgodnie z
                definicją zawartą w art. 2 lit. a rozporządzenia (WE) nr
                1107/2006 Parlamentu Europejskiego i Rady z dnia 5 lipca 2006 r.
                w sprawie praw osób niepełnosprawnych oraz osób o ograniczonej
                sprawności ruchowej podróżujących drogą lotniczą (Dz. Urz. UE L
                204 z 26.07.2006, str. 1), oraz wszelkich osób im
                towarzyszących, kobiet w ciąży i osób w wieku poniżej 18
                (słownie: osiemnaście) lat bez opieki, jak również osób
                wymagających szczególnej opieki medycznej, pod warunkiem że
                Organizator został powiadomiony o sytuacji tych osób co najmniej
                48 (słownie: czterdzieści osiem) godzin przed rozpoczęciem
                Imprezy turystycznej.
              </li>
            </ol>
            <h3 className="documents-heading">
              VI. Odwołanie Imprezy turystycznej
            </h3>
            <ol>
              <li>
                Z uwagi na to, że Organizator organizuje grupowe Imprezy
                turystyczne, może rozwiązać Umowę i dokonać pełnego zwrotu
                Podróżnemu wpłat dokonanych z tytułu Imprezy turystycznej, bez
                dodatkowego odszkodowania lub zadośćuczynienia, jeżeli:<br></br>
                a) nie osiągnie zakładanego minimum grupy:<br></br> • w
                przypadku imprez autokarowych min. 25 (słownie: dwadzieścia
                pięć) osób;<br></br>• w przypadku imprez lotniczych
                realizowanych w oparciu o przeloty rejsowe min. 25 (słownie:
                dwadzieścia pięć) osób;
                <br></br> • w przypadku imprez lotniczych realizowanych w
                oparciu o przeloty czarterowe min. 25 (słownie: dwadzieścia
                pięć) osób; i powiadomi Podróżnego o rozwiązaniu Umowy nie
                później niż:<br></br> • 20 (słownie: dwadzieścia) dni przed
                rozpoczęciem Imprezy turystycznej trwającej ponad 6 (słownie:
                sześć) dni,<br></br> • 7 (słownie: siedem) dni przed
                rozpoczęciem Imprezy turystycznej trwającej 2-6 (słownie: od
                dwóch do sześciu) dni,<br></br> • 48 (słownie: czterdzieści
                osiem) godzin przed rozpoczęciem Imprezy turystycznej trwającej
                krócej niż 2 (słownie: dwa) dni;<br></br> b) wystąpią
                nieuniknione i nadzwyczajne okoliczności i powiadomi Podróżnego
                o rozwiązaniu Umowy niezwłocznie przed rozpoczęciem Imprezy
                turystycznej.
              </li>
              <li>
                Organizator w przypadkach wskazanych w ust. 1 powyżej, dokonuje
                zwrotu wpłat dokonanych z tytułu Umowy w terminie 14 (słownie:
                czternaście) dni od dnia jej rozwiązania.
              </li>
              <li>
                Jeżeli Impreza turystyczna zostanie odwołana z powodu
                nieosiągnięcia zakładanego minimum grupy wskazanego w ust. 1
                lit. a) powyżej, Podróżny zostanie o tym powiadomiony w
                pierwszej kolejności telefonicznie lub innym dostępnym sposobem,
                a następnie na piśmie lub innym trwałym nośniku.
              </li>
            </ol>
            <h3 className="documents-heading">
              VII. Rezygnacja z Imprezy turystycznej
            </h3>
            <ol>
              <li>
                Przed rozpoczęciem Imprezy turystycznej Podróżny ma możliwość
                zrezygnowania z Imprezy turystycznej. Oświadczenie o rezygnacji
                z Imprezy turystycznej Podróżny jest zobowiązany złożyć w formie
                pisemnej lub na innym trwałym nośniku na adres Organizatora
                wskazany w art. 1 ust. 1 niniejszych Warunków Uczestnictwa.
              </li>
              <li>
                W razie odstąpienia od Umowy Podróżny jest zobowiązany do
                zapłacenia na rzecz Organizatora opłaty za odstąpienie od Umowy
                określanej i pobieranej przez Organizatora zgodnie z przepisami
                art. 47 ust. 2 ustawy o imprezach turystycznych.
              </li>
              <li>
                Do kalkulacji ostatecznie poniesionych kosztów Organizatora może
                przystąpić dopiero po dacie końcowej wyjazdu i rozliczeniu
                kosztów Imprezy turystycznej, z której Podróżny nie skorzystał.
              </li>
              <li>
                Organizator w terminie 14 (słownie: czternaście) dni od
                rozwiązania Umowy dokona zwrotu Podróżnemu zapłaconej kwoty za
                Imprezę turystyczną pomniejszonej o opłatę za odstąpienie od
                Umowy, obliczoną na podstawie kosztów znanych w dniu rozwiązania
                Umowy. Jeżeli po kalkulacji ostatecznie poniesionych kosztów
                zajdzie konieczność zwrócenia Podróżnemu części opłaty –
                Organizator niezwłocznie zwróci Podróżnemu należną kwotę.
              </li>
              <li>
                Powyższe postanowienia niniejszego paragrafu nie mają
                zastosowania w przypadku, gdy Ustawa stanowi, iż odstąpienie
                przez Podróżnego od Umowy lub jej rozwiązanie przez Podróżnego
                następuje bez opłaty.
              </li>
              <li>
                Do chwili rozpoczęcia imprezy turystycznej Podróżny ma prawo
                przenieść na osobę trzecią prawa i obowiązki wynikające z Umowy.
                Osoba zastępująca powinna spełniać wszystkie wymogi konieczne do
                uczestnictwa w Imprezie turystycznej. Podróżnyzobowiązany jest
                do poinformowania Organizatora o zmianie Podróżnego Imprezy
                turystycznej, na piśmie, pod rygorem nieważności, przed
                rozpoczęciem Imprezy turystycznej. Opłata manipulacyjna przy
                zmianie Podróżnego wynosi 100 zł za osobę. Opłata ta stanowi
                równowartość kosztów poniesionych przez Organizatora z tytułu
                dokonanych zmian. Podróżny może zwrócić się do Organizatora o
                przedstawienie indywidulanych wyliczeń poniesionych kosztów w
                związku z dokonaną zmianą. Za pokrycie kosztów Imprezy
                turystycznej i kosztów dodatkowych, powstałych poprzez zmianę
                osoby zastępującej, odpowiadają solidarnie: Podróżny i osoba
                zastępująca.
              </li>
              <li>
                Wszelkie opłaty manipulacyjne, związane z rezygnacją i zmianą
                Umowy, jak również opłaty za indywidualny przebieg Imprezy
                turystycznej, są natychmiast wymagalne.
              </li>
            </ol>
            <h3 className="documents-heading">
              VIII. Ubezpieczenie Podróżnych oraz ubezpieczenia dodatkowe
            </h3>
            <ol>
              <li>
                Ubezpieczenie zawierane przez Organizatora na rzecz Podróżnego
                ma charakter podstawowy, dlatego Podróżny powinien zawrzeć
                dodatkowe ubezpieczenie w razie potrzeby. Za realizację
                świadczeń wynikających z ubezpieczenia Podróżnego odpowiada
                bezpośrednio ubezpieczyciel. Organizator ani inne biura nie
                pośredniczą w wypłacie odszkodowań oraz nie mają wpływu na
                decyzję ubezpieczyciela o odmowie wypłaty odszkodowania.
              </li>
            </ol>
            <h3 className="documents-heading">
              IX. Obowiązkowa, ustawowa gwarancja Organizatora
            </h3>
            <ol>
              <li>
                Organizator posiada, zgodnie z art. 7 ust. 1 i ust. 2 ustawy o
                imprezach turystycznych zabezpieczenie finansowe w postaci:
                gwarancję ubezpieczeniowej wystawionej przez AXA Ubezpieczenia
                Towarzystwo Ubezpieczeń i Reasekuracji S.A. Kontakt z podmiotem
                udzielającym zabezpieczeń finansowych: ul.Chłodna 51, 00-867
                Warszawa, tel. +48 22 599 95 22,(dalej jako „Ubezpieczyciel”).
                Podróżni mogą kontaktować się z tym podmiotem lub w odpowiednich
                przypadkach, z właściwym organem Marszałek Województwa
                Mazowieckiego,ul. Jagiellońska 26, 03-719 Warszawa, jeżeli z
                powodu niewypłacalności Organizatora, dojdzie do odmowy
                świadczenia usług.
              </li>
              <li>
                Numer gwarancji, jej wysokość, okres jej trwania oraz nazwa
                towarzystwa ubezpieczeniowego są każdorazowo podawane na stronie
                internetowej Organizatora. Z kopią certyfikatu Gwarancji
                Ubezpieczeniowej Podróżny może zapoznać się na stronie
                internetowej Organizatora.
              </li>
              <li>
                Ubezpieczenie obejmuje sytuacje, gdy Organizator wbrew
                obowiązkowi nie zapewnia powrotu do kraju oraz pokrywa zwrot
                wpłat wniesionych przez Podróżnych w razie niewykonania Umowy,
                Podróżny powinien niezwłocznie skontaktować się z
                Ubezpieczycielem. Ubezpieczyciel zawiadamia właściwego marszałka
                województwa, a następnie wypłaca zaliczkę na pokrycie kosztów
                powrotu Podróżnych do kraju w terminie do 3 (słownie: trzy) dni
                roboczych licząc od dnia otrzymania pisemnej dyspozycji od
                właściwego marszałka województwa lub wskazanej przez niego
                jednostki.
              </li>
              <li>
                Wypłata środków z Gwarancji Ubezpieczeniowej następuje w
                zakresie:<br></br> a) pokrycia kosztów powrotu Podróżnego z
                Imprezy turystycznej do miejsca wyjazdu lub planowanego powrotu
                z Imprezy turystycznej;<br></br> b) pokrycia zwrotu wpłat
                wniesionych tytułem zapłaty za Imprezę turystyczną;<br></br> c)
                pokrycia zwrotu części wpłat wniesionych tytułem zapłaty za
                Imprezę turystyczną.
              </li>
            </ol>
            <h3 className="documents-heading">X. Reklamacje</h3>
            <ol>
              <li>
                Podróżny ma obowiązek poinformować Organizatora lub
                przedstawiciela Organizatora w miejscu realizacji Imprezy
                turystycznej o wszelkich niezgodnościach stwierdzonych w trakcie
                realizacji Imprezy turystycznej. W przypadku stwierdzenia
                niedogodności Podróżny ma prawo do złożenia reklamacji w postaci
                papierowej listownie na adres Organizatora lub elektronicznie
                e-mailem na adres: kroplazdrowia.obozy@gmail.com.
              </li>
              <li>
                Reklamacja powinna zawierać dane umożliwiające identyfikację
                Podróżnego i Imprezy turystycznej, w której uczestniczył (w tym
                m.in. numer Umowy oraz datę Imprezy turystycznej albo w miarę
                możliwości jedynie kopię zawartej Umowy), przedmiot reklamacji,
                wskazanie niezgodności oraz określenie żądań. Reklamacja powinna
                zostać złożona w terminie nie dłuższym niż 30 (słownie:
                trzydzieści) dni od dnia zakończenia Imprezy turystycznej.
              </li>
              <li>
                Jeżeli reklamacja złożona zostanie po terminie, o którym mowa w
                ust. 2 powyżej, Organizator uprawniony jest do uznania jej za
                bezskuteczną. Nie uchybia to jednak ani nie ogranicza uprawnień
                Podróżnego do dochodzenia roszczeń na drodze sądowej przed
                upływem okresu przedawnienia, wynoszącego 3 (słownie: trzy)
                lata.
              </li>
              <li>
                Podróżny, w trakcie rozpatrywania reklamacji przez Organizatora
                powinien zapewnić współpracę z Organizatorem w zakresie
                niezbędnym do rozpatrzenia reklamacji.
              </li>
              <li>
                Odpowiedź na reklamację zostanie udzielona Podróżnemu w terminie
                30 (słownie: trzydzieści) dni od momentu jej otrzymania przez
                Organizatora. Odpowiedź na reklamację zostanie udzielona w
                takiej samej formie w jakiej została złożona. Termin na
                odpowiedź uznaje się za zachowany, jeżeli w ostatnim dniu
                powyższego terminu reklamacja została wysłana listownie lub
                drogą mailową zgodnie z ust. 1 powyżej.
              </li>
              <li>
                Reklamacje dotyczące przelotu do/z miejsca docelowego oraz
                bagażu zniszczonego lub uszkodzonego w czasie przelotu samolotem
                podlegają uregulowaniom Konwencji o ujednostajnieniu niektórych
                prawideł, dotyczących międzynarodowego przewozu lotniczego,
                podpisanej w Warszawie dnia 12 października 1929 r. z
                późniejszymi zmianami i aneksami, rozporządzenia Parlamentu
                Europejskiego i Rady nr 261/2004 z dnia 11 lutego 2004
                ustanawiającego wspólne zasady odszkodowania i pomocy dla
                pasażerów w przypadku odmowy przyjęcia na pokład albo odwołania
                lub dużego opóźnienia lotów, uchylającego rozporządzenie (EWG)
                nr 295/91 (Dz. Urz. UE L 46 z 17.02.2004, str. 1) oraz ustawy z
                dnia 3 lipca 2002 r. – Prawo lotnicze (t.j. Dz. U. z 2018 r.
                poz. 1183 z późn. zm.). Zgodnie z tymi regulacjami pasażer
                (posiadający imiennie wystawiony bilet) ma prawo złożyć
                reklamację do przedstawicielstwa właściwej linii lotniczej, a w
                przypadku wyczerpania drogi reklamacyjnej – skargę do Urzędu
                Lotnictwa Cywilnego (ul. Marcina Flisa 2, 02- 247 Warszawa).
              </li>
              <li>
                Reklamacje związane z ubezpieczeniem podróżnym można zgłaszać do
                Ubezpieczyciela: Aktualne dane teleadresowe ubezpieczyciela oraz
                szczegóły dotyczące postępowania reklamacyjnego znajdują się na
                stronie internetowej https://www.uniqa.pl/
              </li>
            </ol>
            <h3 className="documents-heading">
              XI. Odpowiedzialność Organizatora
            </h3>
            <ol>
              <li>
                Organizator ponosi odpowiedzialność za wykonanie Usług
                Turystycznych objętych Umową, bez względu na to, czy usługi te
                mają być wykonane przez Organizatora czy przez innych dostawców
                Usług Turystycznych. Jeżeli przepisy szczególne ograniczają
                zakres albo warunki, na jakich odszkodowanie lub
                zadośćuczynienie jest wypłacane przez dostawcę Usług
                Turystycznych, które są częścią Imprezy turystycznej, takie same
                ograniczenia stosuje się do Organizatora.
              </li>
              <li>
                Podróżnemu przysługuje obniżka ceny, za każdy okres, w trakcie
                którego stwierdzono niezgodność, chyba że została ona
                spowodowana wyłącznym działaniem lub zaniechaniem Podróżnego.
                Odpowiednie zastosowanie mają postanowienia par. VI niniejszych
                Warunków Uczestnictwa.
              </li>
              <li>
                Obniżka ceny, odszkodowanie lub zadośćuczynienie, o których mowa
                w ust. 1-2 powyżej, podlegają odpowiedniemu obniżeniu w
                przypadku skorzystania przez Podróżnego z obniżenia ceny lub
                odszkodowania, o których mowa w rozporządzeniu (WE) nr 261/2004
                Parlamentu Europejskiego i Rady z dnia 11 lutego 2004 r.
                ustanawiającym wspólne zasady odszkodowania i pomocy dla
                pasażerów w przypadku odmowy przyjęcia na pokład albo odwołania
                lub dużego opóźnienia lotów, uchylającym rozporządzenie (EWG) nr
                295/91 (Dz. Urz. UE L 46 z 17.02.2004, str. 1), rozporządzeniu
                (WE) nr 1371/2007 Parlamentu Europejskiego i Rady z dnia 23
                października 2007 r. dotyczącym praw i obowiązków pasażerów w
                ruchu kolejowym (Dz. Urz. UE L 315 z 03.12.2007, str. 14),
                rozporządzeniu Parlamentu Europejskiego i Rady (WE) nr 392/2009
                z dnia 23 kwietnia 2009 r. w sprawie odpowiedzialności
                przewoźników pasażerskich na morskich drogach wodnych z tytułu
                wypadków (Dz. Urz. UE L 131 z 28.05.2009, str. 24),
                rozporządzeniu Parlamentu Europejskiego i Rady (EU) nr 1177/2010
                z dnia 24 listopada 2010 r. o prawach pasażerów podróżujących
                drogą morską i drogą wodną śródlądową oraz zmieniającym
                rozporządzenie (WE) nr 2006/2004 i rozporządzeniu Parlamentu
                Europejskiego i Rady (UE) nr 181/2011 z dnia 16 lutego 2011 r.
                dotyczącym praw pasażerów w transporcie autobusowym i
                autokarowym oraz zmieniającym rozporządzenie (WE) nr 2006/2004,
                jak również w innych przepisach.
              </li>
              <li>
                Podróżnemu nie przysługuje odszkodowanie lub zadośćuczynienie za
                niezgodność z Umową w przypadku, gdy Organizator udowodni, że:
                winę za niezgodność ponosi Podróżny lub winę za niezgodność
                ponosi osoba trzecia, niezwiązana z wykonywaniem Usług
                Turystycznych objętych Umową, a niezgodności nie dało się
                przewidzieć lub uniknąć lub niezgodność została spowodowana
                nieuniknionymi i nadzwyczajnymi okolicznościami.
              </li>
              <li>
                Organizator wyłącza odpowiedzialność w stosunku do Podróżnych
                rezygnujących z Imprezy turystycznej w czasie jej trwania, chyba
                że rezygnacja nastąpiła w przypadkach określonych w par. VI.
                niniejszych Warunków Uczestnictwa i w przepisach ustawy o
                imprezach turystycznych. Organizator nie gwarantuje miejsca w
                środku transportu (busie, autokarze lub samolocie) w razie
                samowolnej (tj. nie zaakceptowanej przez Organizatora) zmiany
                przez Podróżnego miejsca wsiadania lub wylotu.
              </li>
              <li>
                Organizator nie ponosi odpowiedzialności za podjętą przez
                odpowiednich urzędników granicznych/imigracyjnych odmowną
                decyzję wpuszczenia Podróżnego do danego kraju, jeśli
                okoliczność taka nastąpi wyłącznie w związku z działaniem lub
                zaniechaniem takich urzędników i z przyczyn niezawinionych przez
                Organizatora. Odpowiednie zastosowanie mają postanowienia pkt
                XII. niniejszych Warunków Uczestnictwa.
              </li>
              <li>
                Organizator nie ponosi odpowiedzialności za utratę lub
                uszkodzenie bagażu, jeżeli winę za szkodę ponosi Organizator lub
                osoba trzecia niezwiązana z wykonaniem Usług Turystycznych lub
                została spowodowana nieuniknionymi, nadzwyczajnymi
                okolicznościami.
              </li>
              <li>
                Organizator nie ponosi odpowiedzialności za zmianę programu
                Imprezy turystycznej dokonaną na życzenie i za zgodą Podróżnego.
                Organizator nie ponosi odpowiedzialności za umowy zawierane
                przez Podróżnego w miejscu pobytu z podmiotami trzecimi, bez
                pośrednictwa Organizatora.
              </li>
              <li>
                Organizator ogranicza odpowiedzialność za niewykonanie lub
                nienależyte wykonanie Usług Turystycznych w czasie Imprezy
                turystycznej do trzykrotności ceny Imprezy turystycznej, nie
                dotyczy to jednak szkód na osobie lub szkody spowodowanej
                umyślnie przez Organizatora lub w wyniku rażącego niedbalstwa.
              </li>
              <li>
                Odpowiedzialność Organizatora ograniczona jest również w
                przypadkach określonych w umowach międzynarodowych, których
                stroną jest Rzeczpospolita Polska.
              </li>
            </ol>
            <h3 className="documents-heading">XII. Obowiązki Organizatora</h3>
            <ol>
              <li>
                Organizator jest zobowiązany przed zawarciem Umowy do podania
                Podróżnemu informacji wymienionych w art. 40 ustawy o imprezach
                turystycznych.
              </li>
              <li>
                Organizator jest zobowiązany poinformować Podróżnego o
                szczególnych zagrożeniach dla zdrowia lub życia w miejscu
                planowanej Imprezy turystycznej oraz o możliwości ubezpieczenia
                z tym związanego.
              </li>
              <li>
                Z dniem 16.07.2006 r. Organizator zobowiązany jest zgodnie z
                rozporządzeniem (WE) nr 2111/2005 Parlamentu Europejskiego i
                Rady z dnia 14 grudnia 2005 r. w sprawie ustanowienia
                wspólnotowego wykazu przewoźników lotniczych podlegających
                zakazowi wykonywania przewozów w ramach Wspólnoty i informowania
                pasażerów korzystających z transportu lotniczego o tożsamości
                przewoźnika lotniczego wykonującego przewóz oraz uchylającym
                art. 9 dyrektywy 2004/36/WE do poinformowania pasażerów
                korzystających z transportu lotniczego o tożsamości przewoźnika
                lotniczego wykonującego przewóz. Jeżeli w dniu zawarcia Umowy
                nie jest jeszcze znany przewoźnik lotniczy, to Organizator
                zobowiązuje się tymczasowo do podania nazwy przypuszczalnego
                przewoźnika. Jak tylko ostatecznie zostanie ustalony przewoźnik,
                Organizator niezwłocznie powiadomi o tym Podróżnego. W wypadku
                zmiany przewoźnika po zawarciu Umowy Podróżny zostanie również
                niezwłocznie o tym poinformowany przez Organizatora. Organizator
                zastrzega sobie możliwość zmiany linii lotniczych i numerów
                lotów, co może się wiązać również ze zmianą rozkładu przelotów.
              </li>
              <li>
                Organizator niezwłocznie udziela odpowiedniej pomocy Podróżnemu,
                który znalazł się w trudnej sytuacji, w tym w okolicznościach,
                gdy niemożliwe jest zapewnienie powrotu Podróżnego do kraju
                zgodnie z Umową z powodu nieuniknionych i nadzwyczajnych
                okoliczności. Pomoc, o której mowa powyżej, polega w
                szczególności na udzieleniu: odpowiednich informacji dotyczących
                świadczeń zdrowotnych, władz lokalnych oraz pomocy konsularnej;
                pomocy w skorzystaniu ze środków porozumiewania się na
                odległość, w tym ze środków komunikacji elektronicznej oraz w
                skorzystaniu ze świadczeń zastępczych. Odpowiednie zastosowanie
                mają postanowienia pkt V. niniejszych Warunków Uczestnictwa.
              </li>
              <li>
                Organizator może żądać opłaty z tytułu udzielenia pomocy, o
                której mowa w ust. 4 powyżej, jeżeli trudna sytuacja powstała z
                wyłącznej winy umyślnej Podróżnego lub w wyniku jego rażącego
                niedbalstwa. Wysokość opłaty nie może przewyższać rzeczywistych
                kosztów poniesionych przez Organizatora.
              </li>
            </ol>
            <h3 className="documents-heading">
              XIII. Odpowiedzialność, prawa i obowiązki Podróżnego
            </h3>
            <ol>
              <li>
                Podróżny ponosi odpowiedzialność odszkodowawczą za szkody
                wyrządzone Organizatorowi, innym podróżnym, hotelom,
                apartamentom, liniom lotniczych oraz innym tego rodzaju
                podmiotom. Podróżny ponosi odpowiedzialność odszkodowawczą za
                szkody na przedmiotach należących do tych podmiotów.
              </li>
              <li>
                Podróżny ponosi odpowiedzialność materialną za szkody wyrządzone
                z jego winy lub z winy w nadzorze nad osobami, za które
                odpowiada, na zasadach określonych w przepisach k.c.
              </li>
              <li>
                Podróżny ma prawo do świadczeń Organizatora gwarantowanych
                Umową. Podróżny uprawniony jest w czasie trwania Imprezy
                turystycznej do korzystania z fachowej pomocy i opieki
                przedstawicieli Organizatora.
              </li>
              <li>
                4. Podróżny zawierając Umowę zobowiązuje się do:<br></br> a)
                przestrzegania przepisów paszportowych, celnych, zdrowotnych
                oraz innych przepisów kraju, z którego podróżuje i do którego
                się udaje. Podróżny pokrywa wszelkie koszty powstałe w wyniku
                nieprzestrzegania tych przepisów;<br></br> b) posiadania ważnych
                dokumentów podroży: paszportu (do krajów spoza UE) oraz
                paszportu lub dowodu osobistego (do krajów UE), ewentualnie wizy
                turystycznej; obowiązek posiadania ważnego dokumentu podroży
                dotyczy również dzieci – bez względu na ich wiek;<br></br> c)
                przestrzegania wskazówek i zaleceń przedstawicieli/pracowników
                Organizatora, koniecznych dla prawidłowej realizacji zawartej
                Umowy;<br></br> d) respektowania postanowień Umowy dotyczących
                transportu, w szczególności do bezwzględnego przestrzegania
                miejsca i godzin zbiórek;<br></br> e) przestrzegania regulaminów
                wewnętrznych dotyczących w szczególności kwestii porządkowych
                oraz bezpieczeństwa obowiązujących u przewoźników, w hotelach
                oraz innych miejscach, w których świadczone będą Usługi
                Turystyczne objęte Umową, a także do przestrzegania instrukcji
                personelu wyżej wymienionych;<br></br> f) przestrzegania
                przepisów celnych i dewizowych obowiązujących w Rzeczypospolitej
                Polskiej oraz krajach tranzytowych i docelowych;<br></br> g)
                uiszczenia wszystkich lokalnych opłat w miejscu pobytu (np.
                podatki lokalne, opłaty klimatyczne, kaucje, opłaty za telefony
                w pokoju hotelowym, korzystanie z minibaru itp.) – pod rygorem
                wystąpienia z roszczeniem przez Organizatora.
              </li>
            </ol>
            <h3 className="documents-heading">XIV. Postanowienia końcowe</h3>
            <ol>
              <li>
                W sprawach nieuregulowanych Warunkami Uczestnictwa zastosowanie
                mają odpowiednie przepisy kodeksu cywilnego oraz ustawa o
                imprezach turystycznych.
              </li>
              <li>
                Ewentualne spory, strony będą rozstrzygały polubownie.
                Skorzystanie z pozasądowych sposobów rozpatrywania reklamacji i
                dochodzenia roszczeń ma charakter dobrowolny. Zapisy zawarte w
                niniejszym paragrafie mają charakter informacyjny i nie stanowią
                zobowiązania Podróżnego lub Organizatora do skorzystania z
                pozasądowych sposobów rozwiązywania sporów.
              </li>
              <li>
                Oświadczenie Organizatora o zgodzie lub odmowie wzięcia udziału
                w postępowaniu w sprawie pozasądowego rozwiązywania sporów
                konsumenckich składane jest przez Organizatora pisemnie lub na
                innym trwałym nośniku w przypadku, gdy w następstwie złożonej
                przez konsumenta reklamacji spór nie został rozwiązany. Zasady
                prowadzenia postępowań w sprawie pozasądowego rozwiązywania
                sporów konsumenckich oraz obowiązki przedsiębiorców w tym
                zakresie określone są odrębnie w przepisach prawa (w tym w
                szczególności w ustawie z dnia 23 września 2016 r. o pozasądowym
                rozwiązywaniu sporów konsumenckich, Dz.U.2016 poz. 1823) lub w
                regulacjach stosowanych przez odpowiednie podmioty właściwe w
                zakresie rozwiązywania sporów konsumenckich. Szczegółowe
                informacje dotyczące możliwości skorzystania przez Podróżnego
                będącego konsumentem z pozasądowych sposobów rozpatrywania
                reklamacji i dochodzenia roszczeń oraz zasady dostępu do tych
                procedur mogą być dostępne w siedzibach oraz na stronach
                internetowych powiatowych (miejskich) rzeczników konsumentów,
                organizacji społecznych, do których zadań statutowych należy
                ochrona konsumentów, Wojewódzkich Inspektoratów Inspekcji
                Handlowej, w szczególności również pod następującym adresem
                strony internetowej Urzędu Ochrony Konkurencji i Konsumentów:
                https://www.uokik.gov.pl/pozasadowe_rozwiazywanie_sporow_konsumenckich.php.{" "}
              </li>
              <li>
                Prezes Urzędu Ochrony Konkurencji i Konsumentów prowadzi jawny
                rejestr podmiotów uprawnionych do prowadzenia postępowania w
                sprawie pozasądowego rozwiązywania sporów konsumenckich.
                Podróżny będący konsumentem posiada następujące przykładowe
                możliwości skorzystania z pozasądowych sposobów rozpatrywania
                reklamacji i dochodzenia roszczeń: Podróżny uprawniony jest do
                zwrócenia się do stałego polubownego sądu konsumenckiego, o
                którym mowa w art. 37 ustawy z dnia 15 grudnia 2000 r. o
                Inspekcji Handlowej (Dz.U. 2001 nr 4 poz. 25 ze zm.), z
                wnioskiem o rozstrzygnięcie sporu wynikłego z zawartej Umowy;
                Podróżny uprawniony jest do zwrócenia się do wojewódzkiego
                inspektora Inspekcji Handlowej, zgodnie z art. 36 ustawy z dnia
                15 grudnia 2000 r. o Inspekcji Handlowej (Dz.U. 2001 nr 4 poz.
                25 ze zm.), z wnioskiem o wszczęcie postępowania mediacyjnego w
                sprawie pozasądowego rozwiązywania sporu między Podróżnym a
                Organizatorem. Podróżny może uzyskać bezpłatną pomoc w sprawie
                rozstrzygnięcia sporu korzystając także z bezpłatnej pomocy
                powiatowego (miejskiego) rzecznika konsumentów lub organizacji
                społecznej, do której zadań statutowych należy ochrona
                konsumentów (m.in. Federacja Konsumentów, Stowarzyszenie
                Konsumentów Polskich). Urzędnik może złożyć skargę za
                pośrednictwem platformy internetowej ODR:
                http://ec.europa.eu/consumers/odr/. Platforma ODR stanowi także
                źródło informacji na temat form pozasądowego rozstrzygania
                sporów mogących powstać pomiędzy przedsiębiorcami i
                konsumentami.
              </li>
              <li>
                Niniejsze Warunki Uczestnictwa obowiązują dla Imprez
                realizowanych od dnia 12.05.2021 r.
              </li>
            </ol>
          </div>
        </section>
        <SocialLinks styleClass="social-links-fixed" />
      </SubpageLayout>
    </Layout>
  )
}

export default Warunki
