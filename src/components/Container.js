import React, { Component, PropTypes } from 'react';
import ArticleList from './ArticleList';
import Chart from './Chart';
import NewArticleForm from './NewArticleForm';
import Filters from './Filters';
import DaypickerComponent from './Daypicker';
import TestKlimov from './TestKlimov';

class Container extends Component {

    static propTypes = {};

    state = {

    };

    render() {

        // demo for klimov
        const data = [
                {
                    "name": "Neville",
                    "surname": "Snider",
                    "phone": "(03200) 5210590"
                },
                {
                    "name": "Avram",
                    "surname": "Lowe",
                    "phone": "(0777) 97529319"
                },
                {
                    "name": "Kyle",
                    "surname": "Ball",
                    "phone": "(013) 39689065"
                },
                {
                    "name": "Eaton",
                    "surname": "Harrington",
                    "phone": "(05108) 9200335"
                },
                {
                    "name": "Sebastian",
                    "surname": "Carrillo",
                    "phone": "(0905) 96751761"
                },
                {
                    "name": "Ulysses",
                    "surname": "Ryan",
                    "phone": "(00409) 4956883"
                },
                {
                    "name": "Arthur",
                    "surname": "Booth",
                    "phone": "(08038) 7754384"
                },
                {
                    "name": "Gannon",
                    "surname": "Gallagher",
                    "phone": "(037549) 880186"
                },
                {
                    "name": "Josiah",
                    "surname": "Leonard",
                    "phone": "(034810) 186171"
                },
                {
                    "name": "Elliott",
                    "surname": "Farley",
                    "phone": "(0380) 27967244"
                },
                {
                    "name": "Griffith",
                    "surname": "Barrett",
                    "phone": "(038320) 239591"
                },
                {
                    "name": "Chaney",
                    "surname": "Rodgers",
                    "phone": "(002) 69447025"
                },
                {
                    "name": "Howard",
                    "surname": "Blair",
                    "phone": "(0279) 60074978"
                },
                {
                    "name": "Wylie",
                    "surname": "Hartman",
                    "phone": "(039740) 087892"
                },
                {
                    "name": "Dexter",
                    "surname": "Rose",
                    "phone": "(031596) 952392"
                },
                {
                    "name": "Fitzgerald",
                    "surname": "Cunningham",
                    "phone": "(04570) 5829263"
                },
                {
                    "name": "Armando",
                    "surname": "Harrell",
                    "phone": "(0114) 50625439"
                },
                {
                    "name": "Leo",
                    "surname": "Chapman",
                    "phone": "(01829) 5996836"
                },
                {
                    "name": "Ryder",
                    "surname": "Hatfield",
                    "phone": "(037941) 786522"
                },
                {
                    "name": "Tad",
                    "surname": "Banks",
                    "phone": "(034957) 512556"
                },
                {
                    "name": "Nathaniel",
                    "surname": "Finley",
                    "phone": "(07766) 6069148"
                },
                {
                    "name": "Daquan",
                    "surname": "Cobb",
                    "phone": "(051) 98890409"
                },
                {
                    "name": "Theodore",
                    "surname": "Jones",
                    "phone": "(072) 66495962"
                },
                {
                    "name": "Melvin",
                    "surname": "King",
                    "phone": "(056) 30358946"
                },
                {
                    "name": "Carl",
                    "surname": "Mckee",
                    "phone": "(030651) 459905"
                },
                {
                    "name": "Bradley",
                    "surname": "Moses",
                    "phone": "(031593) 379704"
                },
                {
                    "name": "Uriah",
                    "surname": "Santiago",
                    "phone": "(07339) 0404000"
                },
                {
                    "name": "Barrett",
                    "surname": "Holloway",
                    "phone": "(0076) 39500171"
                },
                {
                    "name": "Dante",
                    "surname": "Day",
                    "phone": "(0203) 44830819"
                },
                {
                    "name": "Orson",
                    "surname": "Banks",
                    "phone": "(054) 26562156"
                },
                {
                    "name": "Damon",
                    "surname": "Torres",
                    "phone": "(0240) 12504707"
                },
                {
                    "name": "Burke",
                    "surname": "Ray",
                    "phone": "(0528) 10767012"
                },
                {
                    "name": "Len",
                    "surname": "Vaughn",
                    "phone": "(0693) 35025553"
                },
                {
                    "name": "Acton",
                    "surname": "Barker",
                    "phone": "(09200) 7368038"
                },
                {
                    "name": "Oliver",
                    "surname": "Pearson",
                    "phone": "(0489) 80144708"
                },
                {
                    "name": "Dylan",
                    "surname": "Waller",
                    "phone": "(0107) 49794233"
                },
                {
                    "name": "Malcolm",
                    "surname": "Lyons",
                    "phone": "(09343) 5933174"
                },
                {
                    "name": "Seth",
                    "surname": "Coleman",
                    "phone": "(090) 79343209"
                },
                {
                    "name": "Steven",
                    "surname": "Le",
                    "phone": "(0432) 14436493"
                },
                {
                    "name": "Thomas",
                    "surname": "Holder",
                    "phone": "(090) 33438298"
                },
                {
                    "name": "Hamilton",
                    "surname": "Mitchell",
                    "phone": "(032774) 813816"
                },
                {
                    "name": "Jasper",
                    "surname": "Leonard",
                    "phone": "(084) 52380366"
                },
                {
                    "name": "Harrison",
                    "surname": "Henderson",
                    "phone": "(0023) 76012608"
                },
                {
                    "name": "Akeem",
                    "surname": "Underwood",
                    "phone": "(01401) 3631510"
                },
                {
                    "name": "Burke",
                    "surname": "Sheppard",
                    "phone": "(04392) 7020935"
                },
                {
                    "name": "Igor",
                    "surname": "Wolf",
                    "phone": "(032192) 666908"
                },
                {
                    "name": "Alexander",
                    "surname": "Fischer",
                    "phone": "(0525) 14741724"
                },
                {
                    "name": "Benjamin",
                    "surname": "Everett",
                    "phone": "(039725) 976607"
                },
                {
                    "name": "Ralph",
                    "surname": "Armstrong",
                    "phone": "(082) 53209139"
                },
                {
                    "name": "Lionel",
                    "surname": "Everett",
                    "phone": "(015) 33789906"
                },
                {
                    "name": "Kyle",
                    "surname": "Branch",
                    "phone": "(09547) 9074481"
                },
                {
                    "name": "Noble",
                    "surname": "Rollins",
                    "phone": "(0192) 75945236"
                },
                {
                    "name": "Leo",
                    "surname": "Mcmillan",
                    "phone": "(078) 12747782"
                },
                {
                    "name": "Levi",
                    "surname": "Avila",
                    "phone": "(037235) 231881"
                },
                {
                    "name": "Baxter",
                    "surname": "Odom",
                    "phone": "(0897) 13641868"
                },
                {
                    "name": "Darius",
                    "surname": "Clements",
                    "phone": "(090) 79447459"
                },
                {
                    "name": "Jonas",
                    "surname": "Herrera",
                    "phone": "(0326) 11016838"
                },
                {
                    "name": "Channing",
                    "surname": "Boone",
                    "phone": "(062) 88923761"
                },
                {
                    "name": "Fletcher",
                    "surname": "Cole",
                    "phone": "(030841) 916387"
                },
                {
                    "name": "Francis",
                    "surname": "Aguilar",
                    "phone": "(02214) 8012112"
                },
                {
                    "name": "Caleb",
                    "surname": "Gillespie",
                    "phone": "(023) 02225957"
                },
                {
                    "name": "Harrison",
                    "surname": "Camacho",
                    "phone": "(067) 82059400"
                },
                {
                    "name": "Steel",
                    "surname": "Maxwell",
                    "phone": "(0105) 57473575"
                },
                {
                    "name": "Len",
                    "surname": "Bryant",
                    "phone": "(09823) 8946958"
                },
                {
                    "name": "Paul",
                    "surname": "Ford",
                    "phone": "(02927) 4439575"
                },
                {
                    "name": "Baxter",
                    "surname": "Mcfarland",
                    "phone": "(0129) 60899494"
                },
                {
                    "name": "Kato",
                    "surname": "Ortiz",
                    "phone": "(0756) 46280578"
                },
                {
                    "name": "Amal",
                    "surname": "Clay",
                    "phone": "(04421) 4373836"
                },
                {
                    "name": "Galvin",
                    "surname": "York",
                    "phone": "(02525) 3940424"
                },
                {
                    "name": "Jin",
                    "surname": "Vance",
                    "phone": "(084) 59355281"
                },
                {
                    "name": "Vernon",
                    "surname": "Hicks",
                    "phone": "(039349) 706555"
                },
                {
                    "name": "Thor",
                    "surname": "Knight",
                    "phone": "(0743) 53314344"
                },
                {
                    "name": "Josiah",
                    "surname": "Reynolds",
                    "phone": "(017) 11335326"
                },
                {
                    "name": "Raja",
                    "surname": "Park",
                    "phone": "(04828) 1843337"
                },
                {
                    "name": "Chancellor",
                    "surname": "Rice",
                    "phone": "(035) 28954328"
                },
                {
                    "name": "Marvin",
                    "surname": "Mccarty",
                    "phone": "(07215) 2220436"
                },
                {
                    "name": "Russell",
                    "surname": "Navarro",
                    "phone": "(035115) 874589"
                },
                {
                    "name": "Uriah",
                    "surname": "Hicks",
                    "phone": "(092) 19518991"
                },
                {
                    "name": "Keegan",
                    "surname": "Dennis",
                    "phone": "(0345) 68413177"
                },
                {
                    "name": "Fitzgerald",
                    "surname": "Burris",
                    "phone": "(035085) 291357"
                },
                {
                    "name": "Brock",
                    "surname": "Powell",
                    "phone": "(041) 11721375"
                },
                {
                    "name": "Igor",
                    "surname": "Bates",
                    "phone": "(056) 33477376"
                },
                {
                    "name": "Hyatt",
                    "surname": "Summers",
                    "phone": "(030) 19735212"
                },
                {
                    "name": "Ross",
                    "surname": "Nelson",
                    "phone": "(057) 94043632"
                },
                {
                    "name": "Lane",
                    "surname": "Hanson",
                    "phone": "(032029) 174029"
                },
                {
                    "name": "Amal",
                    "surname": "Riddle",
                    "phone": "(066) 83970090"
                },
                {
                    "name": "Acton",
                    "surname": "Raymond",
                    "phone": "(006) 39487406"
                },
                {
                    "name": "Ferdinand",
                    "surname": "Cummings",
                    "phone": "(030385) 154226"
                },
                {
                    "name": "Sawyer",
                    "surname": "Doyle",
                    "phone": "(07459) 2992588"
                },
                {
                    "name": "Boris",
                    "surname": "Douglas",
                    "phone": "(030501) 270791"
                },
                {
                    "name": "Odysseus",
                    "surname": "Alvarez",
                    "phone": "(034333) 207703"
                },
                {
                    "name": "Nathaniel",
                    "surname": "Barber",
                    "phone": "(0291) 86075644"
                },
                {
                    "name": "Rahim",
                    "surname": "Raymond",
                    "phone": "(035908) 136153"
                },
                {
                    "name": "Ralph",
                    "surname": "Mclaughlin",
                    "phone": "(031570) 986898"
                },
                {
                    "name": "Chester",
                    "surname": "Wyatt",
                    "phone": "(0806) 15902739"
                },
                {
                    "name": "Gareth",
                    "surname": "Nguyen",
                    "phone": "(092) 80460734"
                },
                {
                    "name": "Hedley",
                    "surname": "Garrison",
                    "phone": "(0788) 98901730"
                },
                {
                    "name": "Luke",
                    "surname": "Green",
                    "phone": "(06851) 9233061"
                },
                {
                    "name": "Walker",
                    "surname": "Rollins",
                    "phone": "(053) 24002842"
                },
                {
                    "name": "Mason",
                    "surname": "Lawson",
                    "phone": "(08892) 4705214"
                }
            ];
        //


        const { articles } = this.props;
        return (
            <div>
                <DaypickerComponent />
                <Filters articles = {articles} />
                <ArticleList articles = {articles} />
                <Chart />
                <NewArticleForm />
                <TestKlimov students = {data}/>
            </div>
        );
    }
}

export default Container;
