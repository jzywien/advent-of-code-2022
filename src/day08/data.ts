export const sample = ['30373', '25512', '65332', '33549', '35390'];

export const input = [
   '222112212213012301211134200002032424301142102231553514443201341400212230204230401120330131220022210',
   '102112111222233101031402012403201222213455312422432144422311112420034421043440034112120031011001111',
   '102122223023130331231203443334122242323322135341452245355543411453442102413422113120120032330210022',
   '110001231100011332234413013213045445233212225343233154553335222544334133331211032334110100233102201',
   '112120312023213203233203304022134355314211535351534544145442243315233432344112114414123111203320020',
   '011002313231332320303110000042412533123545342432545135533235211212352231130344444401342320130320121',
   '202200003023134141242312215422124511134354234431153434535452422114151522515014320031112011030221212',
   '113102102331342324141114531234352232235552513522232636554232221113521412245544143301410240122300333',
   '211033000313424140310442544541544534324266444536336436655636514121154553344222201421134014231222302',
   '332011030332301044222122531531145414243656663555635264222563536433553554235415534133020002100133303',
   '003200210344344312222345212454341556565524245554625246646642233535613232411111322202404003021131033',
   '212202212302402424325552233413344566554423363522454624625334634462244412142314412223233004123103222',
   '231133111414111002334425521322446233535222326464242534552643634365465232413221523242312003123132201',
   '313223120340002432131523132325234665452663343265346463224425352244233432414425145251402321040022332',
   '110231011423200225543222433636555256543455255323675332254645322645563353642135152132431112220340303',
   '013033041334034232133125136663662262646656343763365537633776266646642565425431553252154042003222320',
   '211124212402311241341432552546235523455675766654367677563446366265563452623544411131322320324104112',
   '311012141030452455113536433334564634756367376436373765454656664536225465334623141141513523202242330',
   '012301101445223125154545353334243457447565444477775644753467675333526255343363252124213413334120103',
   '233321342044534154326365623624635757737336333365467477364576355456334523455422644531423214142224224',
   '301402311421451141543665323222675333544545373365757767436436377564663672643455325544345555343040001',
   '304423021253551124566534255363675576646675576466557455437737444737747537646443223341251522522230001',
   '402303113531252112565332322437444444733673535744665564777363553757753536545453435361315251231022201',
   '343113132243234232442552423677343665646745755454558875768678444345656475473455643666552254215432201',
   '001131034112131524452326657653354765338567784768566647744666875357433357473443522344225243313244213',
   '122023311433442633553443245556444633487484788585787474756876774566456663465434656446221314315234003',
   '210402415552526566563532756754334548465444477566878777656684755778854636554443444552623255421510333',
   '012001214432256464324225465635565588677746855755476557887465446855587337665333246334333115555314412',
   '222132543313562322224657563736748886877557564745856544774584766446584737675675655426522652442214320',
   '423214351334263626364676677744385788876488856679865769577554548558576845634376735645243412241314440',
   '200352424121452235643454473333744776478657758589797689577768775555766757575457666524463265134132113',
   '333315323435235263224363656558587456864875686898957675666699844768877857436437433545365222234341541',
   '440534535556542636375566743576488664766587899757997995986595998576846675543444535754225244215134554',
   '024231424242352653653366736648748655879977997589965595769786599767867475484663336562353663434352152',
   '343213443126654446367347436548467666598677556987577797968667957998466875566535756646625564625421223',
   '305442424346225553455343444677558786657855987787595987859767769565548776784763364346444544514354521',
   '044542513463542544536576766646765867855955675958686896585987667655786864488874467573643532225314434',
   '333323555525534363367466378746456755999597668978976886986995578868978575457547765434534344531342414',
   '132144512424624543767433787687869887957589699699889779999966965978785846878667767435452426244313414',
   '433315554346265355436574786758868587559859868886977896966698966958756685885573763453344346541151314',
   '413513516336543645563337757744486999985966876969996998987779796796957876687654446366443562255155552',
   '053533316545342553357448558745679998895697868968686986668766695755859555675684345446663325326241315',
   '452255213256224764677634885884887668896987769886798989898796878696976888585775655464573535262323413',
   '053251253265242337365677865455955659889688896796678767879969869899867794878748765545564452542212253',
   '432555255435523454456458675766766597799799989798787877998969799858879977447488835336742526665511541',
   '241254425566644576536545645478755987567969698987978987986867699878998779657567765374554632255352231',
   '212251243454532574336574754465559565989998678999989897797679989965986789447484777735556645354241432',
   '351554453346366564744644787789767968867866998889898777887886689868676957588465675646434432325641155',
   '233511144565355357637675467645758888989986767888998798799777986999866999584486736777445526634415411',
   '552551233443243573655777577789585687789669879789877787877797698876776579788877444673437534324525435',
   '143232566345523665757754565545667867777877897788988787899896686998995587547878766774555656636534135',
   '433541553363523355656668675576556586969876788988999899779867798965678555468486575354456535425515555',
   '344212454446337547774468664578575566899789897799779877978888689668755668747448866467365322263243551',
   '552455432524262376773384654645576767866796977978879898778678866967889686688766434443675265336615251',
   '135535155623522753744547875577557687669676967888999988997966866665885787456748875435366562424534531',
   '215231124322426336745754475847579989586768769897789779979667996797575879668644656454763644425121422',
   '212353152225262656674688558455679556678778878999989978897988687695977855845875545365732546546221153',
   '342215156352366476447768686848995677666966898699678876998899788557885988654556543633764333352552233',
   '321515146536623334447468787664857689889778679897689767666666876959657687557868737443466335436245511',
   '013113244334363455557346868585476788777899669889889787896976986999798856665844344437522465564541413',
   '255143115565563633554666548747467856858787976799799896788898657557689855656457337356756442362123313',
   '031335324654646343353765754757559786988898799879766777869766957768678785744646763447522433365222442',
   '355114345566265574654466845444746655698758868679677967667965686587997467558857755676353563261512215',
   '211333325622665265467373444887576597859865989789968666967785965758665846744764735736522262624221433',
   '203525523354545545357477756777858468677997556567877689887986699968965485487544534377623343312412411',
   '035353154465262346653634674485667468675788965676899758666759666989765546648457665765463456343215245',
   '443532324422363343764533655655465475697667556876899886655786789655544677465744335565363522535323222',
   '023221222543624565343363346774576887896898699755676558575985686565448575865345566522423236451422212',
   '340212523155644543675734665446864675489858766958766655767576857748765787847634454442644324452422442',
   '340432344521322563564356377754466658556459785655679599676758974745687864733753553535332232533455131',
   '423215444314465433363574467737846756465458875587578798587755447654584446665777433425655623221415333',
   '231241142215323244526775377664464744577555454676959887594554756855744536775664443534325342321451404',
   '041413415453153535346557674463478885886466466478646768858584468688855347653754554436233543155525231',
   '124222414122553624346345437665675777668785565746566685776576878464743736477344643425242212132152233',
   '431120425412133263655256663746445748465757577585866545754667484666835737774574546346652434524454213',
   '332043443511242235543633465473473675845445877745757888777748556755354763764335524334264445423240213',
   '110122354411324336322632634335645635764775666784878647588876775364547734567432433353213554524544241',
   '404321421523113114622636256564577663536565667777575445785888764456777343552445536242253322122412030',
   '434030213332131144533432644476553675447575534754446688644447737555467767665365336555321252231243214',
   '334212124143441352445224356446437377466337354564437476736756465563366773665422354564145454110014014',
   '023203310131523434232255525444447564635374747633465767673754476337356662443425256514522323244112441',
   '101120041133443314423543562233264736667766476557757433763676347364333644664555433355235131413120024',
   '011012441204314121121546323525643344445465476574645343546646554766764455636662533425443342404340220',
   '120142204403244355135312262656523644334637455757667465354467643636263363553436554344424440004042021',
   '010024440443243142133431335563452363655567477576345335375375467332245326522442143115352523013434101',
   '221004131030132523224521244363343325363355755366544745635363662456454464634235115135451040111124021',
   '221132142310414233535533233653455643535365654435673454636364553636652426332435251441310343014132131',
   '100303413021411121224513435162254455525254445364236246246445454523356224411311133322303211413333203',
   '101123123243233425552423352333355654363465545332323556635563566444222565424212444124103140200212222',
   '113232221042340022452124431511116363243453446254253642443442525545623322551453455154131341124213102',
   '023002112204241124205223211223435354464434654566424625466423255554312543425225144413300342321320033',
   '300302313044222022000442431444142544322536453645445345252346423512232111334143531243041000123213120',
   '200011033010243420404315154435115543241326325336453346442553521441225132213223512024314024301112320',
   '112010033200133002013304454543415322425441251224536444233214423545234414225110400142441232331102223',
   '021112220332003000034123214453541414533524435224552515112152545215413542331013134004230400322020232',
   '021102300011120141433401232445214332421554341255254252534554543451451351441303324220233023133322000',
   '201221330223300010443300144044452432145223434443422235541121234255244513242121233314221213203000111',
   '202100221111033202310310014120314313424245224554332212352354242541454431213130404221010021102320022',
   '210120011112003123423244304300221413244525315153255555432535313221224211034403142213223310310310011',
];
