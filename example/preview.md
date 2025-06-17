# API Preview

## getName()

彭桦敏

## getName("彭")

彭泓

## getName(5)

叶麟,金俊昕,蔡锡强,颜娜,萧烈心

## getName("姚", 5)

姚铠婉,姚歆,姚培永,姚利萧,姚锐

## getName({ count: 5 })

陈桂震,邵锋,卢昊礼,纪舟,黎锋樱

## getName({ count: 5, unique: true, givenNameDuplicated: true })

于城城,卢柳柳,吴晗晗,王宁宁,沈丽丽

## getName({ count: 5, surname: "张" })

张子,张全曦,张鼎炫,张芊,张钦

## getName({ count: 5, surname: "张", givenNameLength: 2 })

张彦昊,张航峻,张佩豪,张宏远,张垚寻

## getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊湛,李俊修,李俊琪,李俊锋,李俊锋

## getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张辉英,张枷英,张莹英,张燕英,张博英

## getName({ count: 5, unique: true, returnType: "surname" })

邹,万,黄,侯,孙

## getName({ count: 5, unique: true, returnType: "givenName" })

宇乔,淑,希斌,毓炜,圣均

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

养翰,单勋,费基,皋林,慎惠

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

上官雨,鲜于桐,漆雕子,南宫丽,微生健

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

廖萱,龙桂,董祺,汪雪,林馨

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

诸葛荣,司徒勋,欧阳铠,令狐皓,令狐浩

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

鲍奕,支阳,夕承,乌沐,谷乔

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

赫连超,呼延卓,百里晔,赫连智,南门烈

## getName({ count: 5, unique: true, surname: ["张", "李"] })

李超钧,张晴昀,张芳,张霄悠,张尧宾

## getName({ count: 5, unique: true, surname: "关" })

关凯,关炜,关昭,关栋,关静

## getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

何小桐,孙小桐,樊穗宁,魏穗宁,唐小桐

## getName({ count: 5, unique: true, givenName: "佳运" })

崔佳运,季佳运,冯佳运,汤佳运,龙佳运

## getName({ count: 5, unique: true, givenNameAttributes: "male" })

温毅,叶腾,翟祥希,陈昆翰,苏荣亮

## getName({ count: 5, unique: true, givenNameAttributes: "female" })

罗珂阳,段宁静,陈妙,赵萍媛,武淑

## getName({ count: 5, unique: true, givenNameAttributes: "metal" })

吴钦,陶锴永,张昱钦,董钰,吴钟

## getName({ count: 5, unique: true, givenNameAttributes: "wood" })

彭楠,黎棠,毛森诚,白悠森,袁榆诚

## getName({ count: 5, unique: true, givenNameAttributes: "water" })

袁清,廖泷,熊源文,林景泷,夏海

## getName({ count: 5, unique: true, givenNameAttributes: "fire" })

任炜,宋灿,洪曦灿,徐皓,莫晗

## getName({ count: 5, unique: true, givenNameAttributes: "earth" })

林峻,汪基希,龚岱,冯境,薛均

## getName({ count: 5, unique: true, givenNameAttributes: "animal" })

覃乔枭,戴鹰霖,严麟,肖雀,牛乐枭

## getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

丁基,姜柒岳,赵玲峥,叶垚瑶,余境

## getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

贺晴泽,张渊,宋渊,范淇,董皓渤

## getName({ count: 5, unique: true, gender: "female" })

林霏,何馨潇,金梦,黄妍,施晶

## getName({ count: 5, unique: true, wuxing: "fire" })

傅灿昱,梁焕,伍炜永,宋炎,汤烨

## getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

伍垚,秦峰泽,钱峻,梁岚滨,覃峥

## getName({ count: 10, unique: true, surnamePickStrategy: "random" })

焦铭,纪妮礼,张岱枷,梁舒,姚彦,欧阳斌志,范锐,潘旭,武桦,章智媛

## getName({ count: 10, unique: true, surnamePickStrategy: "weight" })

付煜,乔乔淇,雷斌芷,许钧,林子,汪枭暃,苏枫,谢景梧,石锡,吴林

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurnames("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,邓,韩,冯,曹,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,汪,范,廖,石,金,韦,贾,夏,付,方,邹,熊,白,孟,秦,邱,侯,江,尹,薛,闫,雷,龙,黎,史,陶,贺,毛,段,郝,顾,龚,邵,覃,武,钱,戴,严,莫,孔,常,汤,赖,萧,傅,阎,包,康,伍,施,万,洪,庞,樊,季,庄,殷,温,倪,翟,申,向,齐,乔,文,安,易,颜,牛,岳,简,骆,毕,章,鲁,关,葛,柳,俞,聂,蓝,祝,柴,纪,焦,祁,耿,邢,尚,芦,成,涂,麦,欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurnames("common").length

162

## getAllSurnames("common", "compound")

欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurnames("common", "compound").length

12

## getAllSurnames("common", "single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,林,高,罗,郑,梁,谢,宋,唐,许,邓,韩,冯,曹,彭,曾,肖,田,董,潘,袁,蔡,蒋,余,于,杜,叶,程,魏,苏,吕,丁,任,卢,姚,沈,钟,姜,崔,谭,陆,汪,范,廖,石,金,韦,贾,夏,付,方,邹,熊,白,孟,秦,邱,侯,江,尹,薛,闫,雷,龙,黎,史,陶,贺,毛,段,郝,顾,龚,邵,覃,武,钱,戴,严,莫,孔,常,汤,赖,萧,傅,阎,包,康,伍,施,万,洪,庞,樊,季,庄,殷,温,倪,翟,申,向,齐,乔,文,安,易,颜,牛,岳,简,骆,毕,章,鲁,关,葛,柳,俞,聂,蓝,祝,柴,纪,焦,祁,耿,邢,尚,芦,成,涂,麦

## getAllSurnames("common", "single").length

150

## getAllSurnames().length

1097

## getAllSurnames("rare").length

935

## getAllSurnames("rare", "compound").length

56

## getAllSurnames("rare", "single").length

879

## getNameStr()

姜燕栋

## getNameStr("彭")

彭祥

## getNameStr(5)

胡永熙,韩锐,韩萱,陆威新,吕瑞英

## getNameStr("姚", 5)

姚镇铄,姚霄析,姚静,姚帆焕,姚彤静

## getNameStr({ count: 5 })

汤彬,谢茹梧,郝琦昊,史义,陈琦灵

## getNameStr({ count: 5, unique: true, givenNameDuplicated: true })

肖元元,郭俐俐,陈楠楠,庄承承,温轩轩

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

俞

## getSurname(5)

曹,曾,韩,常,许

## getGivenName()

康炎

## getGivenName(5)

义栩,雅,明彦,基,梅
