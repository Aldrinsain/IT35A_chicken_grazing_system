// assets/js/data.js — Application Data (Mock / State)

let currentUser = null;
let currentRole = null;

let chickens = [
  {id:1,tag:'CH-001',name:'Goldie',breed:'Rhode Island Red',farmer:'Juan Dela Cruz',zone:'Piles of leaves (dry or wet)',status:'Inside',weight:2.5,moves:5,lat:7.1510,lng:124.8600,emoji:'🐔'},
  {id:2,tag:'CH-002',name:'Brownie',breed:'Plymouth Rock',farmer:'Juan Dela Cruz',zone:'Kitchen waste or scraps area',status:'Inside',weight:2.2,moves:3,lat:7.1520,lng:124.8620,emoji:'🐔'},
  {id:3,tag:'CH-003',name:'Blackie',breed:'Australorp',farmer:'Maria Santos',zone:'Outside',status:'Outside',weight:2.8,moves:7,lat:7.1545,lng:124.8590,emoji:'🐤'},
  {id:4,tag:'CH-004',name:'Spotty',breed:'Barred Rock',farmer:'Pedro Reyes',zone:'Soft soil',status:'Inside',weight:2.1,moves:2,lat:7.1495,lng:124.8610,emoji:'🐔'},
  {id:5,tag:'CH-005',name:'Sunny',breed:'Leghorn',farmer:'Juan Dela Cruz',zone:'Piles of leaves (dry or wet)',status:'Inside',weight:1.9,moves:4,lat:7.1505,lng:124.8625,emoji:'🐔'},
  {id:6,tag:'CH-006',name:'Rusty',breed:'Rhode Island Red',farmer:'Maria Santos',zone:'Dust or sandy ground',status:'Moving',weight:2.6,moves:8,lat:7.1525,lng:124.8575,emoji:'🐤'},
  {id:7,tag:'CH-007',name:'Fluffy',breed:'Cochin',farmer:'Pedro Reyes',zone:'Soft soil',status:'Inside',weight:3.0,moves:1,lat:7.1488,lng:124.8615,emoji:'🐔'},
  {id:8,tag:'CH-008',name:'Rocky',breed:'Cornish',farmer:'Juan Dela Cruz',zone:'Outside',status:'Outside',weight:3.2,moves:6,lat:7.1552,lng:124.8640,emoji:'🐤'},
];

let farmers = [
  {id:1,name:'Juan Dela Cruz',username:'juan_dc',email:'juan@farm.ph',chickens:10,zones:'Soft soil, Piles of leaves (dry or wet)',status:'Active'},
  {id:2,name:'Maria Santos',username:'maria_s',email:'maria@farm.ph',chickens:8,zones:'Kitchen waste or scraps area, Dust or sandy ground',status:'Active'},
  {id:3,name:'Pedro Reyes',username:'pedro_r',email:'pedro@farm.ph',chickens:7,zones:'Piles of leaves (dry or wet), Animal manure piles (goat or cow)',status:'Active'},
];

let movements = [
  {tag:'CH-001',from:'Soft soil',to:'Piles of leaves (dry or wet)',time:'10:30:45',status:'Inside',duration:'2h 15m'},
  {tag:'CH-002',from:'Piles of leaves (dry or wet)',to:'Kitchen waste or scraps area',time:'10:28:12',status:'Inside',duration:'1h 45m'},
  {tag:'CH-003',from:'Soft soil',to:'Outside',time:'10:25:33',status:'Outside',duration:'1h 10m'},
  {tag:'CH-004',from:'Kitchen waste or scraps area',to:'Soft soil',time:'09:55:00',status:'Inside',duration:'2h 05m'},
  {tag:'CH-005',from:'Soft soil',to:'Piles of leaves (dry or wet)',time:'09:40:00',status:'Inside',duration:'1h 30m'},
  {tag:'CH-006',from:'Piles of leaves (dry or wet)',to:'Dust or sandy ground',time:'09:20:10',status:'Moving',duration:'50m'},
  {tag:'CH-007',from:'Outside',to:'Soft soil',time:'08:55:00',status:'Inside',duration:'3h 05m'},
  {tag:'CH-008',from:'Piles of leaves (dry or wet)',to:'Outside',time:'08:30:00',status:'Outside',duration:'2h 30m'},
];

let alertMessages = [
  {type:'red',msg:'Chicken #12 is outside boundary',time:'2 mins ago'},
  {type:'orange',msg:'Chicken #5 no movement for 2 hours',time:'15 mins ago'},
  {type:'blue',msg:'Chicken #23 moved to Zone C',time:'1 hour ago'},
  {type:'red',msg:'Chicken #8 is outside boundary',time:'2 hours ago'},
  {type:'orange',msg:'Chicken #31 inactive for 3 hours',time:'3 hours ago'},
  {type:'blue',msg:'Chicken #17 entered Zone A',time:'4 hours ago'},
];

let nextChickenId = 9;
let nextFarmerId = 4;
const emojis = ['🐔','🐤','🐣'];
const ZONE_COLORS = {'Soft soil':'#3b82f6','Piles of leaves (dry or wet)':'#22c55e','Kitchen waste or scraps area':'#f97316','Dust or sandy ground':'#8b5cf6','Animal manure piles (goat or cow)':'#ef4444','Outside':'#dc2626'};
