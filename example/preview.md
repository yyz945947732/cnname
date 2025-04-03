# API Preview

## cnname()

石全潇

## cnname("彭")

彭岱庆

## cnname(5)

徐杰,唐培凤,谭雯,孙凯,贾境景

## cnname("姚", 5)

姚彬琪,姚纶翰,姚柔,姚霖烨,姚峥

## cnname({ count: 5 })

吴梓,袁娜,杜勋峻,兰菁英,王炜

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

冯卫卫,郝天天,蒋妍妍,顾瑜瑜,任语语

## cnname({ count: 5, surname: "张" })

张强,张然鼎,张凤焱,张良,张锴

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张鹿卫,张林柏,张哲康,张卫铮,张宁昱

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊凡,李俊佳,李俊文,李俊澜,李俊辉

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张佑英,张萧英,张亮英,张源英,张依英

## cnname({ count: 5, unique: true, returnType: "surname" })

严,邵,左,郭,关

## cnname({ count: 5, unique: true, returnType: "givenName" })

岚璇,雅,宇,栩,歆

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

符威,周翼,及远,户柏,安凌

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

公羊林,南门霖,子车嘉,宗政彩,令狐竹

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

朱诗,毛珍,卢林,董义,邓泽

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

皇甫珂,欧阳歆,夏侯枫,欧阳芮,欧阳修

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

步瑞,宿希,之野,窦彦,释韬

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

宇文语,宇文卓,端木华,淳于昆,濮阳鸿

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

张嫣,张烽姬,李懿,李栋,李信鲸

## cnname({ count: 5, unique: true, surname: "关" })

关岳,关阳伊,关琦,关利,关莹

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

詹小桐,姜穗宁,郑穗宁,戴穗宁,许小桐

## cnname({ count: 5, unique: true, givenName: "佳运" })

吴佳运,马佳运,陈佳运,陆佳运,庞佳运

## cnname({ count: 5, unique: true, givenNameAttributes: "male" })

夏维明,赵超泽,鲁健,王亮祥,黄祥翰

## cnname({ count: 5, unique: true, givenNameAttributes: "female" })

樊歆,武晴美,邓露,贾佩,孙瑜媛

## cnname({ count: 5, unique: true, givenNameAttributes: "metal" })

肖铄铮,罗锋钰,方锐钦,潘钦,龚铮

## cnname({ count: 5, unique: true, givenNameAttributes: "wood" })

侯桦,毛桐杉,贺栋,董榆修,雷翊楠

## cnname({ count: 5, unique: true, givenNameAttributes: "water" })

宁波,董洁,黄沐,梅沐霖,郭涵竹

## cnname({ count: 5, unique: true, givenNameAttributes: "fire" })

董烽云,邱烨焱,叶晴,薛焕,田炫曦

## cnname({ count: 5, unique: true, givenNameAttributes: "earth" })

张垚,宋基,于宁基,于境,韩培

## cnname({ count: 5, unique: true, givenNameAttributes: "animal" })

冯蝉,杨鹿,王萧蝉,王龙,王彪善

## cnname({ count: 5, unique: true, givenNameAttributes: "all" })

吕可泽,朱翔,秦芳,杜露沐,黄彦梓

## cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

董城,肖均,江垚,洪磊灵,姜岱

## cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

甘泽晗,傅烽沐,田炜涵,梁波,廖泷烁

## cnname({ count: 5, unique: true, gender: "female" })

洪丽,安亦曼,黄歆惠,程琳嘉,于珂彤

## cnname({ count: 5, unique: true, wuxing: "fire" })

彭旭,易安灿,林烈,范晴炎,薛烨

## cnname({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

金培,赵峰,俞城,刘岚,李磊

## cnname({ count: 10, unique: true, surnamePickStrategy: "random" })

聂良,苏松军,黎芊嘉,凌义,叶韬希,李鹤雪,李锡,闫钦,韩衡伊,彭超

## cnname({ count: 10, unique: true, surnamePickStrategy: "weight" })

吴炜,杜瑞殷,贾彤,殷铮,王晖,杨佩,杜咏琦,潘亮,王倩鼎,张雅姬

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕,欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurname("common").length

162

## getAllSurname("common", "compound")

欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurname("common", "compound").length

12

## getAllSurname("common", "single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕

## getAllSurname("common", "single").length

150

## getAllSurname().length

1095

## getAllSurname("rare").length

933

## getAllSurname("rare", "compound").length

56

## getAllSurname("rare", "single").length

877

## cnnamestr()

高海庆

## cnnamestr("彭")

彭善凯

## cnnamestr(5)

冯雀,曾荣祺,邹铮,魏翰,韦少舒

## cnnamestr("姚", 5)

姚渊,姚海燕,姚萱萱,姚峥浩,姚菁

## cnnamestr({ count: 5 })

廖彪,谢悠轩,马曦静,陈娜,赵骏曦

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

肖鑫鑫,周文文,胡烁烁,甘锋锋,齐珊珊

## parseName("张三")

{"surname":"张","givenName":"三","fullName":"张三","isValidName":true,"givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":true,"isGivenNameDuplicated":false}

## parseName("笑三")

{"surname":"","givenName":"笑三","fullName":"笑三","isValidName":false,"givenNameLength":2,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("三")

{"surname":"","givenName":"三","fullName":"三","isValidName":false,"givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("")

{"surname":"","givenName":"","fullName":"","givenNameLength":0,"isValidName":false,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三","fullName":"欧阳三","isValidName":true,"givenNameLength":1,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false}

## parseName("欧阳娜娜")

{"surname":"欧阳","givenName":"娜娜","fullName":"欧阳娜娜","isValidName":true,"givenNameLength":2,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":true}

## getSurname()

韩

## getSurname(5)

高,许,肖,高,于

## getSurname({ count: 5, surnameType: "compound", unique: true })

慕容,令狐,夏侯,诸葛,上官

## getGivenName()

德

## getGivenName(5)

佳泉,娜,歆,鹰,潇竹

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

昕昕
