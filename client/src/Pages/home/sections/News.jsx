import React from "react";
import { Link } from "react-router-dom";
import Interior from "../../../assets/modern-interior.jpg";
import Mikrohouse from "../../../assets/small-houses.jpg";
import Plants from "../../../assets/flowers.jpg";
import Paintings from "../../../assets/colors.jpg";
import Materials from "../../../assets/materials.jpg";
import House from "../../../assets/house.jpg";
import NewsBlogCards from "../../../components/news-cards/NewsBlogCards";
import MiddNewsBlogCard from "../../../components/news-cards/MiddNewsBlogCard";

const News = () => {
  return (
    <div className=" pt-5 pb-20  w-full mx-auto border-b-[1px] border-gray mb-10 mobile:mb-5 mobile:pb-10">
      <h2 className="pb-5 text-center text-6xl screen:text-5xl mobile:text-4xl">
        Nyheter
      </h2>
      <hr></hr>
      <div className="flex gap-2 justify-center items-start w-full mx-auto pt-10 max-w-[1400px] tablet:w-[99%] screen:grid-cols-2 screen:gap-1 mobile:grid mobile:grid-cols-1 mobile:w-[95%]  ">
        <div className="flex flex-col gap-2 w-1/4 screen:w-1/2 mobile:w-full ">
          <NewsBlogCards
            image={Materials}
            date="Date:05/01/2023"
            category="Interior"
            title="De mest populære materialene i interiøret - skap en unik og tidløs estetikk."
            text=" Materialvalg i interiøret kan ha en stor innvirkning på atmosfæren i rommet og kan bidra til å skape en unik og tidløs estetikk. Det finnes mange forskjellige materialer å velge mellom, men noen materialer er mer populære enn andre.

            Ett av de mest populære materialene i interiøret akkurat nå er tre. Tre gir et varmt og naturlig preg til rommet og kan kombineres med mange andre materialer. Det finnes mange forskjellige typer tre, fra lyst eik til mørkt teak, så det er lett å finne en type som passer til din stil og ønskede estetikk.
            
            Et annet populært materiale er stål. Stål gir et industrielt preg til rommet og kan kombineres med tre og glass for å skape en unik estetikk. Det kan også være et godt valg for å skape en minimalistisk og moderne estetikk.
            
            Lær er også et populært valg i interiøret. Lær gir en følelse av komfort og eksklusivitet, og kan kombineres med tre og stål for å skape en unik estetikk. Det finnes mange forskjellige nyanser av lær, fra lyst beige til mørkt brun, så det er lett å finne en nyanse som passer til din stil og ønskede estetikk.
            
            Glas er også et populært valg i interiøret. Glass gir et luftig og åpent preg til rommet, og kan kombineres med tre og stål for å skape en unik estetikk. Glass kan også være et godt valg for å skape en minimalistisk og moderne estetikk.
            
            Tekstiler er også populære i interiøret. Det kan være ull, lin, bomull eller andre naturlige tekstiler. De gir varme og komfort i rommet, samtidig som de gir et unikt preg til rommet. "
            link="/"
            bg="bg-stone-400/40"
          />

          <NewsBlogCards
            image={Mikrohouse}
            date="Date:05/01/2023"
            category="Interior"
            title="Mikrohus - den bærekraftige og plassbesparende boligtrenden"
            text=" Mikrohus er et relativt nytt begrep i boligbransjen, og refererer til små, ofte selvbygde hjem som er designet for å være bærekraftige og plassbesparende. Disse hjemmene kan være alt fra tiny houses på hjul til små, faste boliger på steder som tomter eller i byer.

            En av hovedfordelene med mikrohus er at de krever mindre energi og ressurser å bygge og drive enn tradisjonelle hus. Deres mindre størrelse betyr også at de har lavere varme- og kjølebehov, noe som kan bidra til å redusere energiregningene. I tillegg kan de være en løsning for å huse flere mennesker på et lite område, noe som kan være nyttig i byer med høye boligpriser eller i områder med mangel på boliger.
            
            Mikrohus kan også være et attraktivt alternativ for de som ønsker å leve mer bærekraftig. Fordi de krever mindre plass, kan de være lettere å bygge med fornybare energikilder og å integrere grønne tak og hager for å hjelpe til å rense luft og vann.
            
            Det er viktig å merke seg at byggeregler og lover varierer fra sted til sted, så det er viktig å undersøke lokale regler og krav før du bygger et mikrohus. Det er også viktig å tenke på hvordan du vil bruke hjemmet og hvilke funksjoner du trenger, slik at du kan designe et hjem som passer dine behov.
            
            Tross noen utfordringer, ser det ut til at mikrohusene blir mer og mer populære over hele verden, spesielt som et alternativ for å huse flere mennesker på et lite område, og å redusere sine karbonavtrykk. Det er ingen tvil om at mikrohusene har kommet for å bli, og det er spennende å se hvordan de vil utvikle seg i fremtiden."
            link="/"
          />
        </div>
        <div className="flex flex-col gap-2 w-2/4 screen:hidden">
          <MiddNewsBlogCard
            image={Interior}
            date="Date:05/01/2023"
            category="Interior"
            title="Moderne interiør - skap et stilrent og tidløst hjem"
            text=" Moderne interiør har en tendens til å fokusere på enkelhet, funksjonalitet og minimalisme. Det er en stil som har sin opprinnelse i Bauhaus-bevegelsen i 1920-tallet, og som fortsatt er populær i dag. Moderne interiør kan være svært variert, fra klare, rene linjer til mer organiske former, men felles for alle er at de er stilrene og tidløse.

            Moderne interiør har en tendens til å bruke nøytrale farger, som hvitt, grått og svart, og materialer som tre, stål og glass. Dette skaper en ren og enkel estetikk som gir en følelse av ro og plass. Det kan også være flere teksturer, som ull, lin og lær, for å gi varme og komfort.
            
            En viktig del av moderne interiør er å skape et funksjonelt og organisert rom. Dette kan gjøres ved å bruke smarte lagringsløsninger, som skap med skyvedører eller hengende hyller, for å holde tingene på plass uten å ta opp for mye plass.
            
            Moderne interiør kan også være en god måte å integrere grønt i hjemmet. Planter kan være en enkel måte å skape liv og farger i rommet, samtidig som de renser luften og gir en følelse av natur.
            
            Moderne interiør kan være en stil som passer for de som ønsker en tidløs og stilren estetikk, og som setter pris på funksjonalitet og organisering. Det er viktig å ikke glemme at det skal være en refleksjon av deg og ditt livsstil. Så det er viktig å finne en balanse mellom det å ha en stilren"
            link="/"
          />
          <MiddNewsBlogCard
            image={House}
            date="Date:05/01/2023"
            category="Interior"
            title="Nye trender innen moderne boligarkitektur."
            text=" Moderne boligarkitektur har en tendens til å fokusere på enkelhet, funksjonalitet og minimalisme. Det er en stil som har sin opprinnelse i Bauhaus-bevegelsen i 1920-tallet, og som fortsatt er populær i dag. Moderne interiør kan være svært variert, fra klare, rene linjer til mer organiske former, men felles for alle er at de er stilrene og tidløse.

            Moderne interiør har en tendens til å bruke nøytrale farger, som hvitt, grått og svart, og materialer som tre, stål og glass. Dette skaper en ren og enkel estetikk som gir en følelse av ro og plass. Det kan også være flere teksturer, som ull, lin og lær, for å gi varme og komfort.
            
            En viktig del av moderne interiør er å skape et funksjonelt og organisert rom. Dette kan gjøres ved å bruke smarte lagringsløsninger, som skap med skyvedører eller hengende hyller, for å holde tingene på plass uten å ta opp for mye plass.
            
            Moderne interiør kan også være en god måte å integrere grønt i hjemmet. Planter kan være en enkel måte å skape liv og farger i rommet, samtidig som de renser luften og gir en følelse av natur.
            
            Moderne interiør kan være en stil som passer for de som ønsker en tidløs og stilren estetikk, og som setter pris på funksjonalitet og organisering. Det er viktig å ikke glemme at det skal være en refleksjon av deg og ditt livsstil. Så det er viktig å finne en balanse mellom det å ha en stilren"
            link="/"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/4 screen:w-1/2 mobile:w-full">
          <NewsBlogCards
            image={Paintings}
            date="Date:05/01/2023"
            category="Interior"
            title="De mest populære fargene i interiøret - skap en unik og personlig stil"
            text=" Farger kan ha en stor innvirkning på atmosfæren i et rom, og valg av farger i interiøret kan være avgjørende for å skape en unik og personlig stil. Det finnes mange forskjellige farger å velge mellom, men noen farger er mer populære enn andre.

            En av de mest populære fargene i interiøret akkurat nå er grått. Grått er en nøytral farge som kan kombineres med mange andre farger, og det gir et rolig og avslappet preg til rommet. Det kan også være en god farge å bruke som bakgrunn for å fremheve andre farger i rommet.
            
            Et annet populært valg er beige. Beige er en varm og myk farge som gir en følelse av komfort og ro. Den kan også være en god farge å bruke som bakgrunn for andre farger, som for eksempel grønt eller blått.
            
            Blått er også en populær farge i interiøret. Blått har en kjølende effekt og kan bidra til å skape en følelse av ro og avslapning. Det finnes mange forskjellige nyanser av blått, fra klar babyblå til dype marineblå, så det er lett å finne en nyanse som passer til din stil og ønskede atmosfære.
            
            Grønt er også et populært valg i interiøret. Grønt representerer natur og friskhet, og kan bidra til å skape en følelse av harmoni og ro. Det finnes mange forskjellige nyanser av grønt, fra lyse limegrønne til dype jordfarger, så det er lett å finne en nyanse som passer til din stil og ønskede atmosfære.
            
            Svart og hvitt er også populære"
            link="/"
          />

          <NewsBlogCards
            image={Plants}
            date="Date:05/01/2023"
            category="Interior"
            title="Mest populære grønne planter til ditt fantstisk hjem !"
            text="Pothos (Epipremnum aureum) er en av de mest populære grønne plantene i interiøret. Den er lett å ta vare på og trives i et bredt spekter av lysforhold, fra indirekte sollys til dårlig belyst. Pothos er også kjent for å rense luften for skadelige stoffer som formaldehyd, benzen og xylen.
            Snake Plant (Sansevieria trifasciata) er en annen populær grønn plante i interiøret. Den er tørketolerant og trives i et bredt spekter av lysforhold, fra direkte sollys til dårlig belyst. Snake Plant er også kjent for å rense luften for skadelige stoffer som formaldehyd og xylen.
            Zamioculcas (Zamioculcas zamiifolia) er en annen populær grønn plante i interiøret. Den er tørketolerant og trives i et bredt spekter av lysforhold, fra indirekte sollys til dårlig belyst. Zamioculcas er også kjent for å rense luften for skadelige stoffer som formaldehyd og xylen.
            Spider Plant (Chlorophytum comosum) er en annen populær grønn plante i interiøret. Den trives i et bredt spekter av lysforhold, fra indirekte sollys til dårlig belyst. Spider Plant er også kjent for å rense luften for skadelige stoffer som formaldehyd og xylen.
            Ficus (Ficus benjamina) er en annen populær grønn plante i interiøret. Den trives i et bredt spekter av lysforhold, fra indirekte sollys til dårlig belyst. Ficus er også kjent for å rense luften for skadelige stoffer som formaldehyd og xylen.
            Det er viktig å merke seg at alle planter har forskjellige krav til lys, fuktighet og jord, så det er viktig å undersøke dette før du velger en plante for ditt hjem."
            link="/"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
