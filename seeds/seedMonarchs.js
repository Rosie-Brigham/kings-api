
exports.seed = function(knex, Promise) {
  return Promise.join(
//     // Deletes ALL existing entries
  knex('monarchs').del(),

// Inserts seed entries

// ALLL THE MONARCHS!!!!!

  // house of wessex
  knex('monarchs').insert({id: 1, name: 'Alfred', epitaph: 'The Great', image_url: 'https://en.wikipedia.org/wiki/File:Alfred_-_MS_Royal_14_B_VI.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/2-alfred-the-great/', house: 'House of Wessex', born: D('849, 1, 1'), died: D('26 October 899'), ruled_from: D('871, 1, 1'), ruled_to: D('899, 1, 1')}),
  knex('monarchs').insert({id: 2, name: 'Edward', epitaph: 'The Elder', house: 'House of Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Edward_the_Elder_-_MS_Royal_14_B_VI.jpg/100px-Edward_the_Elder_-_MS_Royal_14_B_VI.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/3-edward-the-elder/', born: D('874,1,1'), died: D('17 July 924'), ruled_from: D('26 October 899'), ruled_to: D('26 October 924')}),

  // house of wessex cont
  knex('monarchs').insert({id: 3, name: 'Æthelstan', house: 'Wessex', image_url: 'https://en.wikipedia.org/wiki/File:Aethelstan1_of_England.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/4-athelstan/', born: D('895, 1, 1'), died: D('27 October 939'), ruled_from: D('924, 1, 1'), ruled_to: D('939, 1, 1')}),
  knex('monarchs').insert({id: 4, name: 'Edmund I', house: 'Wessex', image_url: 'https://en.wikipedia.org/wiki/File:Edmund_I_-_MS_Royal_14_B_V.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/5-edmund-i/', born: D('921, 1, 1'), died: D('26 May 946'), ruled_from: D('28 October 939'), ruled_to: D('946, 1, 1')}),
  knex('monarchs').insert({id: 5, name: 'Eadred', house: 'Wessex', image_url: 'https://en.wikipedia.org/wiki/File:Eadred_-_MS_Royal_14_B_VI.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/6-eadred/', born: D('923,1 ,1'), died: D('23 November 955'), ruled_from: D('27 May 946'), ruled_to: D('24 November 955')}),
  knex('monarchs').insert({id: 6, name: 'Eadwig', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Eadwig_-_MS_Royal_14_B_VI.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/7-eadwig/', born: D('940, 1, 1'), died: D('1 October 959'), ruled_from: D('24 November 955'), ruled_to: D('2 October 959')}),
  knex('monarchs').insert({id: 7, name: 'Edgar', epitaph: 'The Peaceable', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/New_Minster_Charter_966_detail_Edgar.jpg/431px-New_Minster_Charter_966_detail_Edgar.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/8-edgar-the-peaceable/', born: D('940, 1, 1'), died: D('1 October 959'), ruled_from: D('2 October 959'), ruled_to: D('8 July 975')}),
  knex('monarchs').insert({id: 8, name: 'Edward', epitaph: 'The Matyr', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Edward_the_Martyr_-_MS_Royal_14_B_VI.jpg/654px-Edward_the_Martyr_-_MS_Royal_14_B_VI.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/9-edward-the-martyr/', born: D('962, 1, 1'), died: D('18 March 978'), ruled_from: D('9 July 978'), ruled_to: D('18 March 978')}),
  knex('monarchs').insert({id: 9, name: 'Æthelred', epitaph: 'The Unready', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/EthelUn.jpg/494px-EthelUn.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/10-aethelred-the-unready/', born: D('968, 1, 1'), died: D('23 April 1016'), ruled_from: D('19 March 978'), ruled_to: D('1013, 1, 1')}),

  // house of denmark
  knex('monarchs').insert({id: 10, name: 'Sweyn Forkbeard', house: 'Denmark', image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Sweyn_Forkbeard.jpg', rex_factor_url: '',  born: D('960, 1, 1'), died: D('3 February 1014'), ruled_from: D('25 December 1013'), ruled_to: D('3 February 1014')}),

  // house of wessex restored
  knex('monarchs').insert({id: 11, name: 'Æthelred', epitaph: 'The Unready', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/EthelUn.jpg/494px-EthelUn.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/10-aethelred-the-unready/', born: D('968, 1, 1'), died: D('23 April 1016'), ruled_from: D('3 February 1014'), ruled_to: D('24 April 1016')}),
  knex('monarchs').insert({id: 12, name: 'Edmund ', epitaph: 'Ironside', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Edmund_Ironside_-_MS_Royal_14_B_V.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/11-edmund-ironside/', born: D('990, 1, 1'), died: D('30 November 1016'), ruled_from: D('24 Apri 1016'), ruled_to: D('30 November 1016')}),

  // house of denmark, restored
  knex('monarchs').insert({id: 13, name: 'Cnut', house: 'Denmark', image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Cnut.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/12-cnut-echo-removed/', born: D('995'), died: D('12 November 1035'), ruled_from: D('18 October 1016'), ruled_to: D('12 November 1035')}),
  knex('monarchs').insert({id: 14, name: 'Harold Harefoot', house: 'Denmark', image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Harold_H.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/13-harold-i/', born: D('1016, 1, 1'), died: D('17 March 1040'), ruled_from: D('13 November 1035'), ruled_to: D('17 March 1040')}),
  knex('monarchs').insert({id: 15, name: 'Harthacnut', house: 'Denmark', image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Hardeknut.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/14-harthacnut/', born: D('10181, 1, 1'), died: D('8 June 1042'), ruled_from: D('17 March 1040'), ruled_to: D('8 June 1042')}),

  // House of wessex - restored again
  knex('monarchs').insert({id: 16, name: 'Edward', epitaph: 'The Confessor', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Edward_Confessor.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/15-edward-the-confessor/', born: D('1003, 1, 1'), died: D('5 January 1066'), ruled_from: D('9 June 1042'), ruled_to: D('5 January 1066')}),
  knex('monarchs').insert({id: 17, name: 'Harold Godwinson', epitaph: '', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Harold2.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/16-harold-ii-1066/', born: D('1022, 1, 1'), died: D('14 October 1066'), ruled_from: D('6 January 1066'), ruled_to: D('14 October 1066')}),
  knex('monarchs').insert({id: 18, name: 'Edgar', epitaph: 'The Ætheling', house: 'Wessex', image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Edgar_the_%C3%86theling.jpg', rex_factor_url: '', born: D('1053, 1, 1'), died: D('1126, 1, 1'), ruled_from: D('15 October 1066'), ruled_to: D('17 December 1066')}),

  // House of Normandy
  knex('monarchs').insert({id: 19, name: 'William I', epitaph: 'The Bastard/ The Conqueror', house: 'Normandy', image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Vilem1.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/17-william-the-conqueror/', born: D('1028, 1, 1'), died: D('9 September 1087'), ruled_from: D('25 December 1066'), ruled_to: D('9 September 1087')}),
  knex('monarchs').insert({id: 20, name: 'William II', epitaph: 'William Rufus', house: 'Normandy', image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/William_II_of_England.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/18-william-rufus/', born: D('1058, 1, 1'), died: D('2 August 1100'), ruled_from: D('26 September 1087'), ruled_to: D('2 August 1100')}),
  knex('monarchs').insert({id: 21, name: 'Henry I', epitaph: 'Henry Beauclerc', house: 'Normandy', image_url: 'https://s3.amazonaws.com/user-media.venngage.com/247973-35b1c1252f8441dd9431ab4cff528e0f.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/19-henry-i/', born: D('1068, 1, 1'), died: D('1 December 1135'), ruled_from: D('5 August 1100 '), ruled_to: D('1 December 1135')}),

  // House of Blois
  knex('monarchs').insert({id: 22, name: 'Stephen', epitaph: '', house: 'Blois', image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/King_Stephen_from_NPG.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/20-stephen/', born: D('1096, 1, 1'), died: D('25 October 1154'), ruled_from: D('22 December 1135'), ruled_to: D('25 October 1154')}),

  // Disputed Claimant
  knex('monarchs').insert({id: 23, name: 'Matilda', epitaph: 'Empress Matilda', house: '(disputed)', image_url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Empress_Mathilda.png', rex_factor_url: '', born: D('7 February 1102'), died: D('10 September 1167'), ruled_from: D('7 April 1141'), ruled_to: D('1 November 1141')}),

  // House of Anjou
  knex('monarchs').insert({id: 24, name: 'Henry II', epitaph: 'Curtmantle', house: 'Normandy', image_url: 'http://www.british-towns.net/english/_images/angevi1.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/21-henry-ii/', born: D('5 March 1133'), died: D('6 July 1189'), ruled_from: D('19 December 1154'), ruled_to: D('6 July 1189')}),
  knex('monarchs').insert({id: 25, name: 'Henry', epitaph: 'the Young King', house: 'Normandy', image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Henry_the_Young_King_(Historia_Anglorum).jpg', rex_factor_url: '', born: D('28 February 1155'), died: D('11 June 1183'), ruled_from: D('14 June 1170'), ruled_to: D('11 June 1183')}),
  knex('monarchs').insert({id: 26, name: 'Richard I', epitaph: 'the Lionheart', house: 'Normandy', image_url: 'http://www.angus-donald.com/wp-content/uploads/lionheart.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/22-richard-the-lionheart/', born: D('8 September 1157'), died: D('6 April 1199'), ruled_from: D('3 September 1189'), ruled_to: D('6 April 1199')}),
  knex('monarchs').insert({id: 27, name: 'John', epitaph: 'Lackland', house: 'Normandy', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/King_John_from_NPG.jpg/460px-King_John_from_NPG.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/23-john/', born: D('24 December 1166'), died: D('19 October 1216'), ruled_from: D('27 May 1199'), ruled_to: D('19 October 1216')}),

  // disputed claimant, louis
  knex('monarchs').insert({id: 28, name: 'Louis', epitaph: 'the Lion (disputed claimant)', house: 'Capet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Louis8lelion.jpg/485px-Louis8lelion.jpg', rex_factor_url: '', born: D('5 September 1187'), died: D('8 November 1226'), ruled_from: D(' 14 June 1216'), ruled_to: D('22 September 1217')}),

  // House of Pantagent
  knex('monarchs').insert({id: 29, name: 'Henry III', epitaph: '', house: 'Plantagenet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Henrytreti.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/24-henry-iii/', born: D('1 October 1207'), died: D('16 November 1272'), ruled_from: D('28 October 1216'), ruled_to: D('16 November 1272')}),
  knex('monarchs').insert({id: 30, name: 'Edward I', epitaph: 'Longshanks', house: 'Plantagenet', image_url: 'http://www.educationscotland.gov.uk/Images/Edward%20I%20(280x280)_tcm4-562302.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/25-edward-i/', born: D('17 June 1239'), died: D('7 July 1307'), ruled_from: D('20 November 1272'), ruled_to: D('7 July 1307')}),
  knex('monarchs').insert({id: 31, name: 'Edward II', epitaph: '', house: 'Plantagenet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Edward_II_-_British_Library_Royal_20_A_ii_f10_(detail).jpg/220px-Edward_II_-_British_Library_Royal_20_A_ii_f10_(detail).jpg', rex_factor_url: D('http://rexfactor.podbean.com/e/26-edward-ii/'), born: D('25 April 1284'), died: D('21 September 1327'), ruled_from: D('7 July 1307'), ruled_to: D('25 January 1327')}),
  knex('monarchs').insert({id: 32, name: 'Edward III', epitaph: '', house: 'Plantagenet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Edward_III_of_England_(Order_of_the_Garter).jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/27-edward-iii/', born: D('13 November 1312'), died: D('21 June 1377'), ruled_from: D('25 January 1327'), ruled_to: D('21 June 1377')}),
  knex('monarchs').insert({id: 33, name: 'Richard II', epitaph: '', house: 'Plantagenet', image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Richard_II_King_of_England.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/28-richard-ii/', born: D('6 January 1367'), died: D('14 February 1400'), ruled_from: D('21 June 1377'), ruled_to: D('29 September 1399')}),

  // House of Lancaster
  knex('monarchs').insert({id: 34, name: 'Henry IV', epitaph: 'Bolingbroke', house: 'Lancaster', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/King_Henry_IV_from_NPG_%282%29.jpg/459px-King_Henry_IV_from_NPG_%282%29.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/29-henry-iv/', born: D('3 April 1367'), died: D('20 March 1413'), ruled_from: D('30 September 1399'), ruled_to: D('20 March 1413')}),
  knex('monarchs').insert({id: 35, name: 'Henry V', epitaph: 'The Star of England', house: 'Lancaster', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Henry5.JPG/429px-Henry5.JPG', rex_factor_url: 'http://rexfactor.podbean.com/e/30-henry-v/', born: D('16 September 1386'), died: D('31 August 1422'), ruled_from: D('20 March 1413'), ruled_to: D('31 August 1422')}),
  knex('monarchs').insert({id: 36, name: 'Henry VI', epitaph: '', house: 'Lancaster', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/King_Henry_VI.jpg/463px-King_Henry_VI.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/31-henry-vi-wars-of-the-roses/', born: D('6 December 1421'), died: D('21 May 1471'), ruled_from: D('31 August 1422'), ruled_to: D('4 March 1461')}),

  // House of York
  knex('monarchs').insert({id: 37, name: 'Edward IV', epitaph: '', house: 'York', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/EdwardIVofEngland-Yorkist.jpg/503px-EdwardIVofEngland-Yorkist.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/32-edward-iv/', born: D('28 April 1442'), died: D('9 April 1483'), ruled_from: D('4 March 1461'), ruled_to: D('2 October 1470')}),

  //  House of Lancaster, restored
  knex('monarchs').insert({id: 38, name: 'Henry VI', epitaph: '', house: 'Lancaster', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/King_Henry_VI.jpg/463px-King_Henry_VI.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/31-henry-vi-wars-of-the-roses/', born: D('6 December 1421'), died: D('21 May 1471'), ruled_from: D('30 October 1470'), ruled_to: D('11 April 1471')}),

  // House of York, resotred
  knex('monarchs').insert({id: 39, name: 'Edward IV', epitaph: '', house: 'York', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/EdwardIVofEngland-Yorkist.jpg/503px-EdwardIVofEngland-Yorkist.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/32-edward-iv/', born: D('28 April 1442'), died: D('9 April 1483'), ruled_from: D('11 April 1471'), ruled_to: D('9 April 1483')}),
  knex('monarchs').insert({id: 40, name: 'Edward V', epitaph: '(one of the Princes in the Tower)', house: 'York', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/King_Edward_V_from_NPG.jpg/467px-King_Edward_V_from_NPG.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/33-edward-v-princes-in-the-tower/', born: D('2 November 1470'), died: D('1483'), ruled_from: D('9 April 1483'), ruled_to: D('25 June 1483')}),
  knex('monarchs').insert({id: 41, name: 'Richard III', epitaph: '(the one in the carpark)', house: 'York', image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/King_Richard_III.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/34-richard-iii/', born: D('2 October 1452'), died: D('22 August 1485'), ruled_from: D('26 June 1483'), ruled_to: D('22 August 1485')}),

  // House of Tudor
  knex('monarchs').insert({id: 42, name: 'Henry VII', epitaph: '', house: 'Tudor', image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/King_Henry_VII.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/35-henry-vii/', born: D('28 January 1457'), died: D('21 April 1509'), ruled_from: D('22 August 1485'), ruled_to: D('21 April 1509')}),
  knex('monarchs').insert({id: 43, name: 'Henry VIII', epitaph: '', house: 'Tudor', image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Workshop_of_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/36-henry-viii/', born: D('28 June 1491'), died: D('28 January 1547'), ruled_from: D('21 April 1509'), ruled_to: D('28 January 1547')}),
  knex('monarchs').insert({id: 44, name: 'Edward VI', epitaph: '', house: 'Tudor', image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Edward_VI_of_England_c._1546.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/38-edward-vi/', born: D('12 October 1537'), died: D('6 July 1553'), ruled_from: D('28 January 1547'), ruled_to: D('6 July 1553')}),
  knex('monarchs').insert({id: 45, name: 'Lady Jane Grey', epitaph: '9 days Queen', house: 'Tudor', image_url: 'https://www.nationalgallery.org.uk/server.iip?FIF=/fronts/N-1909-00-000080-WZ-PYR.tif&CNT=1&HEI=371&QLT=85&CVT=jpeg', rex_factor_url: '', born: D('October 1537'), died: D('12 February 1554'), ruled_from: D('10 July 1553'), ruled_to: D('19 July 1553')}),
  knex('monarchs').insert({id: 46, name: 'Mary I', epitaph: 'Bloody Mary', house: 'Tudor', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Maria_Tudor1.jpg/453px-Maria_Tudor1.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/39-mary-i/', born: D('18 February 1516'), died: D('17 November 1558'), ruled_from: D('19 July 1553'), ruled_to: D('17 November 1558')}),
  knex('monarchs').insert({id: 47, name: 'Elizabeth I', epitaph: 'Gloriana', house: 'Tudor', image_url: 'http://englishhistory.net/images/tudor/eliz1-rainbow.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/40-elizabeth-i/', born: D('7 September 1533'), died: D('24 March 1603'), ruled_from: D('17 November 1558'), ruled_to: D('24 March 1603')}),

  // House of Stuart
  knex('monarchs').insert({id: 48, name: 'James I', epitaph: '(VI of Scotland)', house: 'Stuart', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/JamesIEngland.jpg/355px-JamesIEngland.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/41-james-i-vi-of-scotland/', born: D('19 June 1566'), died: D('27 March 1625'), ruled_from: D('24 March 1603'), ruled_to: D('27 March 1625')}),
  knex('monarchs').insert({id: 49, name: 'Charles I', epitaph: '', house: 'Stuart', image_url: 'http://www.statesymbolsusa.org/sites/statesymbolsusa.org/files/primary-images/KingCharlesIportrait002.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/42-charles-i-civil-war/', born: D('19 November 1600'), died: D('30 January 1649'), ruled_from: D('27 March 1625'), ruled_to: D('30 January 1649')}),

  // abolution of monarchy
  knex('monarchs').insert({id: 50, name: 'Oliver Cromwell, Lord Protector', epitaph: 'Old Ironsides', house: 'Commonwealth of England', image_url: 'http://historysheroes.e2bn.org/library/images/Cromwell/achievements/cromwell1640.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/43-oliver-cromwell/', born: D('25 April 1599'), died: D('3 September 1658'), ruled_from: D('16 December 1653'), ruled_to: D('3 September 1658')}),
  knex('monarchs').insert({id: 51, name: 'Richard Cromwel, Lord Protector', epitaph: 'Tumbledown Dick', house: 'Commonwealth of England', image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/RichardCromwell.jpeg', rex_factor_url: '', born: D('4 October 1626'), died: D('12 July 1712'), ruled_from: D('3 September 1658'), ruled_to: D('7 May 1659')}),

  // restoration of monarchy
  knex('monarchs').insert({id: 52, name: 'Charles II', epitaph: '', house: 'Stuart', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Charles_II_of_England.jpeg/389px-Charles_II_of_England.jpeg', rex_factor_url: 'http://rexfactor.podbean.com/e/44-charles-ii-restoration/', born: D('29 May 1630'), died: D('6 February 1685'), ruled_from: D('29 May 1660'), ruled_to: D('6 February 1685')}),
  knex('monarchs').insert({id: 53, name: 'James II', epitaph: '', house: 'Stuart', image_url: 'http://www.diadumenian.com/Congressofprinces/James%20II%20of%20England.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/45-james-ii/', born: D('14 October 1633'), died: D('16 September 1701'), ruled_from: D('6 February 1685'), ruled_to: D('23 December 1688 ')}),
  knex('monarchs').insert({id: 54, name: 'Mary II', epitaph: '', house: 'Stuart', image_url: 'http://fergusonvalues.com/wp-content/uploads/2012/06/William-Mary.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/46-william-mary-glorious-revolution/', born: D('30 April 1662'), died: D('28 December 1694'), ruled_from: D('13 February 1689'), ruled_to: D('28 December 1694')}),
  knex('monarchs').insert({id: 55, name: 'William III', epitaph: '', house: 'Stuart', image_url: 'http://fergusonvalues.com/wp-content/uploads/2012/06/William-Mary.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/46-william-mary-glorious-revolution/', born: D('4 November 1650'), died: D('8 March 1702'), ruled_from: D('13 February 1689'), ruled_to: D('8 March 1702')}),
  knex('monarchs').insert({id: 56, name: 'Anne', epitaph: '', house: 'Stuart', image_url: 'https://en.wikipedia.org/wiki/File:Anne1705.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/47-anne/', born: D('6 February 1665'), died: D('1 August 1714'), ruled_from: D('8 March 1702'), ruled_to: D('1 August 1714')}),

  // House of Hanover
  knex('monarchs').insert({id: 57, name: 'George I', epitaph: '', house: 'Hanover', image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/King_George_I_by_Sir_Godfrey_Kneller,_Bt_(3).jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/48-george-i/', born: D('28 May 1660'), died: D('11 June 1727'), ruled_from: D('1 August 1714'), ruled_to: D('11 June 1727')}),
  knex('monarchs').insert({id: 58, name: 'George II', epitaph: '', house: 'Hanover', image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/George_II_of_Great_Britain_-_1730-50.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/49-george-ii/', born: D('30 October 1683'), died: D('25 October 1760'), ruled_from: D('11 June 1727'), ruled_to: D('25 October 1760')}),
  knex('monarchs').insert({id: 59, name: 'George III', epitaph: '', house: 'Hanover', image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/George_III_(by_Allan_Ramsay).jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/51-george-iii-review/', born: D('4 June 1738'), died: D('29 January 1820'), ruled_from: D('25 October 1760'), ruled_to: D('29 January 1820')}),
  knex('monarchs').insert({id: 60, name: 'George IV', epitaph: '', house: 'Hanover', image_url: 'https://www.awesomestories.com/images/user/63abfec05e.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/52-george-iv-the-prince-regent/', born: D('12 August 1762'), died: D('26 June 1830'), ruled_from: D('29 January 1820'), ruled_to: D('26 June 1830')}),
  knex('monarchs').insert({id: 61, name: 'William IV', epitaph: '', house: 'Hanover', image_url: 'http://www.nndb.com/people/387/000093108/king-william-iv-1-sized.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/53-william-iv/', born: D('21 August 1765'), died: D('20 June 1837'), ruled_from: D('26 June 1830'), ruled_to: D('20 June 1837')}),
  knex('monarchs').insert({id: 62, name: 'Victoria', epitaph: '', house: 'Hanover', image_url: 'http://imagecache2.allposters.com/images/LIFPOD/5577080.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/58-victoria-the-review-part-55/', born: D('24 May 1819'), died: D('22 January 1901'), ruled_from: D('20 June 1837'), ruled_to: D('22 January 1901')}),

  // House of Saxe-Coburg and Gotha
  knex('monarchs').insert({id: 63, name: 'Edward VII', epitaph: '', house: 'Saxe-Coburg and Gotha', image_url: 'https://i.digiguide.tv/up/1003/1269378000-738753-EdwardVII-12686485090.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/59-edward-vii/', born: D('9 November 1841'), died: D('6 May 1910'), ruled_from: D('22 January 1901'), ruled_to: D('6 May 1910')}),

  // // House of Windsor
  knex('monarchs').insert({id: 64, name: 'George V', epitaph: '', house: '', image_url: 'https://thefirstworldwarin261weeks.files.wordpress.com/2013/09/george-v.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/60-george-v/', born: D('3 June 1865'), died: D('20 January 1936'), ruled_from: D('6 May 1910'), ruled_to: D('20 January 1936')}),
  knex('monarchs').insert({id: 65, name: 'Edward VIII', epitaph: '', house: '', image_url: 'http://royal-fans.com/wp-content/uploads/2015/06/King-Edward-VIII-Photo-C-Getty-Images.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/61-edward-viii-abdication-crisis/', born: D('23 June 1894'), died: D('28 May 1972'), ruled_from: D('20 January 1936'), ruled_to: D('11 December 1936 ')}),
  knex('monarchs').insert({id: 66, name: 'George VI', epitaph: '', house: '', image_url: 'http://vignette2.wikia.nocookie.net/p__/images/8/80/King_George_VI.jpg/revision/latest?cb=20131203015204&path-prefix=protagonist', rex_factor_url: 'http://rexfactor.podbean.com/e/63-george-vi-review-22/', born: D('14 December 1895'), died: D('6 February 1952'), ruled_from: D('11 December 1936'), ruled_to: D('6 February 1952')}),
  knex('monarchs').insert({id: 67, name: 'Elizabeth II', epitaph: '', house: '', image_url: 'http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTMyODkwNzA1NzgwNjAwODAy.jpg', rex_factor_url: 'http://rexfactor.podbean.com/e/65-elizabeth-ii-1926-53-part-13/', born: D('21 April 1926'), ruled_from: D('6 February 1952')})
  );
};


function D(string) {
  return new Date(string)
}


