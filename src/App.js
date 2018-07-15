import React, {Component} from 'react';
import './App.css';
import _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generatedList: [],
            weapons: {
                pistol: [
                    'Bergmann Simplex', 'Browning Hi-Power', 'C96 Mauser', 'CZ75 Shadow', 'Defender45',
                    'Degle', 'Desert Eagle .44 Magnum', 'Frontier Model B', 'G17', 'G17 Custom', 'G18',
                    'G19', 'G22', 'Jetfire 950 Mother Of Pearl', 'Jetfire 950 Standard', 'Luger LP08',
                    'Luger P08', 'M1911A1 Classic', 'M1911A1 Gold', 'M1911A1 Modern', 'M1911A1 Operator',
                    'M1911A1 Tactical', 'M9A1', 'M9A3', 'Micro Uzi', 'Mk3', 'P250', 'P38', 'P38 Snub',
                    'PPK', 'PX4 Storm', 'Tec9', 'TT33', 'Uzi Pro Pistol', 'LAPD2019 Special',
                    'M1879 Imperial Revolver', 'Model10', 'Model29', 'Nagant', 'R8 Revolver', 'Rhino 20DS',
                    'Rhino 40', 'Rhino 50', 'Rhino 60', 'Single Action Army', 'SW686', 'Webley',
                    'G22 FullAutoMod', 'M9 Cleric', 'M712 Mauser', 'M1911A1 Dilinger',
                    'Super Illegal Tec9 Mod', 'Union French', 'VZ64', 'Contender .45-70',
                    'Rollingblock Handgun 1871 Navy', 'Volcanic'
                ],
                shotgun: [
                    'Break Action Shorty', 'Break Action SUPER Shorty', 'DoubleBarrel 1882', 'DT11',
                    'DT11 Chopped', 'DT11 Shorty', 'Flare Gun', 'Flare Gun HP', 'MTs 225', 'MTs 225 Shorty',
                    'Wells 1864', '590A1 Pump', 'Auto 5', 'Express870', 'M1014', 'M1897 Trench',
                    'M8500 Chopped', 'M8500 Long', 'M8500 Shorty', 'Marshall Ultrashort', 'Spas 12 Classic',
                    'Spas 12 Tactical', 'Super Shorty', 'Super Shorty Tactical', 'AA12', 'CQB 870',
                    'KWG 1', 'Saiga 12k', '1887 Lever Action', '1887 Shorty', '1887 Shorty T2 Varian'
                ],
                smg: [
                    'AEK 919k', 'Blyskawica', 'Cobray M11/9', 'Gepard', 'M1928 Thompson', 'M1A1 Thompson',
                    'M3 Greasegun', 'M3 Greasegun Suppressed', 'Mac 11', 'Model 38', 'MP34', 'MP40', 'Mp5A2',
                    'Mp5k', 'Mp9', 'PP Bizon', 'PPSh-41', 'PPSh-41 Modern', 'StenMk2', 'StenMk5', 'StenMk6',
                    'StenMk9', 'UMP 45', 'Vector 45', 'Vector 45 with Shroud', 'Mp7a1', 'P90', 'PP2000',
                    'PP91 KEDR', 'QC9'
                ],
                rifle: [
                    '1873 Lever Action Carbine', '1873 Lever Action Chopshop', '1873 Lever Action Rifle',
                    '1894 Lever Action Rifle', 'AKS74U', 'AKS74U Tactical', 'Aug A3', 'Commando552',
                    'Commando552 Tactical', 'CX4', 'G36C', 'Hyde Light Rifle', 'Kalishniluger',
                    'Luger 1902', 'M1 Carbine', 'M2 Carbine', 'M4A1 Shorty', 'M4A1', 'M4A1 Lefthook',
                    'Mauser Assault Carabine', 'Mauser Trench Carbine', 'Model 8', 'Model 81', 'MX4',
                    'Quackenbush1886', 'SKS Classic', 'SKS Modern', 'Takedown 10/22', 'Thompson .30 Carabine',
                    'AK101', 'AKM', 'Famas F1', 'G36', 'IA2', 'L85A2', 'M16A1', 'Mk18', 'Scar 16 (Mk 16 Mod 0)',
                    'SG 550', 'StG 44', 'Dragonuv', 'FAL', 'G3A3', 'Galil AR', 'Johnson 1941', 'M14',
                    'M14 DMR', 'M1 Garand', 'MAS 49/56', 'Scar 17 (Mk 17 Mod 0)', 'SVT-40', 'M107A1',
                    '8400 SuperShorty', 'K98k', 'LeeEnfield No.4 Mk1', 'M38 Mosin Nagant', 'Model 70',
                    'Mosin Obrez Pistol', 'Sako85', 'Sako85 Obrez\'d', 'Springfield 1903', 'Tactical 8400',
                ],
                support: [
                    'Bananade', 'Cybernade', 'Dynamite', 'M18 Smoke Grenade', 'M18 Smoke Grenade Red',
                    'M219 Greaseweasel', 'M25 Jingler', 'Mk2 Frag Grenade', 'No69 Grenade',
                    'Steilhandgranate', 'XM84 Stun Grenade', 'Bren', 'Bren Shorty', 'DP28', 'DP28 Shorty',
                    'HandCrankFrank', 'M134 Portable Minigun', 'M249', 'M1918 BAR', 'M1918 BAR Shorty',
                    'M2 Tombstone', 'MG42', 'M1A1 Bazooka', 'M79 Thumper', 'MGL', 'M320', 'PanzerSchreck 54',
                    'RPG7', 'SturmPistole'
                ],
                melee: [
                    'Brass Knuckles', 'Combat Knife Classic', 'D80 Bayonet', 'Karambit', 'Kukri',
                    'MX8', 'Survival Knife', 'Tactical Knife', 'Tanto', 'Tomahawk', 'Baseball Bat',
                    'Billhook Machete', 'Cleaver', 'CleaverOld', 'Crowbar', 'Fire Axe', 'Hatchet',
                    'Machete', 'PickAxe', 'Pipe Bent', 'Big Pipe Wrench', 'Dust Pan', 'Flathead Screwdriver',
                    'Hammer', 'Hammer 2', 'Hammer Old', 'HandAxe', 'MalletRound', 'Mallet Square',
                    'Sledge Hammer', 'Sledge Hammer Old', 'Utility Knife', 'Wrench Twosided',
                    'Chainsaw', 'Drill', 'Claymore', 'Mace 1', 'Mace 2', 'Warhammer', 'Riot Shield', 'Broom',
                    'Garden Shovel', 'HandRake', 'Hoe', 'Pitchfork', 'Rake', 'ShovelFlat', 'Sickle',
                    'Trowel', 'WoodAxe', 'Aluminum CandyCane', 'Tactical Yule Log'
                ]
            }
        }
    }

    generateLoadout = () => {
        //console.log(this.state.weapons);
        let list = [];
        for (let key in this.state.weapons) {
            // check also if property is not inherited from prototype

            if (this.state.weapons.hasOwnProperty(key)) {
                let value = this.state.weapons[key];
                let index = Math.floor(Math.random() * this.state.weapons[key].length);
                //console.log(key.toUpperCase(), value[index]);
                list.push(key.toUpperCase() + '-' + value[index]);
            }
        }

        this.setState({generatedList: list});
    };


    renderList = () => {
        //console.log(this.state.generatedList);
        /*return this.state.generatedList.forEach((item) => {
            console.log(item);
            return item;
        });*/

        return _.map(this.state.generatedList, item => {
            let category = item.split('-')[0];
            let weapon = item.split('-')[1];
            return (
                <li>{category} - <strong>{weapon}</strong></li>
            )
        });
    };

    render() {
        return (
            <div className="App col">
                <h1 className="page-title">H3VR Loadout Randomizer</h1>
                <button className="generate" onClick={e => this.generateLoadout()}>Generate</button>
                <ul className="generated-list col">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

export default App;
