# API Preview

## getName()

蒋辉翰

## getName("彭")

彭媛

## getName(5)

董浩,毛弘,郭腾泓,苏逸,文云翰

## getName("姚", 5)

姚野卓,姚澜颖,姚莉柯,姚博,姚依

## getName({ count: 5 })

谭茵栩,黄珊浩,彭玲,胡韬,雷泓

## getName({ count: 5, unique: true, givenNameDuplicated: true })

雷鲸鲸,贾芳芳,叶妮妮,唐泽泽,曾柔柔

## getName({ count: 5, surname: "张" })

张霜,张奇,张佑妍,张钦,张怡

## getName({ count: 5, surname: "张", givenNameLength: 2 })

张志心,张璇锐,张宸咏,张智霞,张宁怡

## getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊彤,李俊旭,李俊晨,李俊露,李俊志

## getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张炜英,张灿英,张炜英,张城英,张伊英

## getName({ count: 5, unique: true, returnType: "surname" })

徐,许,赵,曹,朱

## getName({ count: 5, unique: true, returnType: "givenName" })

泽,磊,殷,星,韵樱

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

後华,辟雅,王琪,游珊,受咏

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

公孙曦,亓官珂,呼延瑾,皇甫鼎,申屠馨

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

徐露,彭雅,骆柔,曹钦,郝静

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

欧阳语,申屠衡,申屠震,司马贺,皇甫烈

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

睢善,廉轩,侨佳,泣然,言源

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

太叔鸿,宰父妮,澹台岳,子车莉,段干珊

## getName({ count: 5, unique: true, surname: ["张", "李"] })

张璇,张柯,张惠昆,张俪,张凤

## getName({ count: 5, unique: true, surname: "关" })

关雨俊,关毅杰,关倩,关泓昊,关槿

## getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

廖小桐,余穗宁,高小桐,闫小桐,付小桐

## getName({ count: 5, unique: true, givenName: "佳运" })

夏佳运,欧阳佳运,汪佳运,董佳运,梁佳运

## getName({ count: 5, unique: true, givenNameAttributes: "male" })

蔡祥,余纶,潘永智,李远翼,于野

## getName({ count: 5, unique: true, givenNameAttributes: "female" })

田灵,顾蔚,黄歆宏,殷萱,李远珊

## getName({ count: 5, unique: true, givenNameAttributes: "metal" })

郭铮,陈锴,彭仪铠,孙铮,刘铮

## getName({ count: 5, unique: true, givenNameAttributes: "wood" })

毛阳桐,常柳,余榆,徐桐楠,冯桦榆

## getName({ count: 5, unique: true, givenNameAttributes: "water" })

武安海,徐源,于海,田泷波,文远泉

## getName({ count: 5, unique: true, givenNameAttributes: "fire" })

齐烽,洪晴,皇甫炫宁,尹炎桦,林烈

## getName({ count: 5, unique: true, givenNameAttributes: "earth" })

魏霄岳,陈均,苏南磊,梁基,蔡岩城

## getName({ count: 5, unique: true, givenNameAttributes: "animal" })

卢彪,孔骏燕,张腾鱼,肖彪,叶鲸峥

## getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

毛城,薛珂岱,骆培,阎岱珂,黄惠磊

## getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

胡渊,汤泽,罗淼,谭涵烽,刘烈泷

## getName({ count: 5, unique: true, gender: "female" })

聂茵,袁媛,陆嫣,庄凤歆,马雨

## getName({ count: 5, unique: true, wuxing: "fire" })

程晴,聂烈煜,武炜烽,孟焱煜,方烽昕

## getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

廖培,孙磊泽,黄岩洁,王境,杨渊垚

## getName({ count: 10, unique: true, surnamePickStrategy: "random" })

徐槿熙,柳柳钰,江熙诚,齐卫,葛逸峰,芦涵,尚茜凡,谢城翊,蓝露,万海岩

## getName({ count: 10, unique: true, surnamePickStrategy: "weight" })

樊铠,余清嘉,唐远美,江华蝉,朱烈,崔云逸,赵菁,施瑜,薛安,任穗

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

1095

## getAllSurnames("rare").length

933

## getAllSurnames("rare", "compound").length

56

## getAllSurnames("rare", "single").length

877

## getNameStr()

毛勇娇

## getNameStr("彭")

彭岑

## getNameStr(5)

宋惠,周樱光,季毓,温森,龚安楠

## getNameStr("姚", 5)

姚柏皓,姚远,姚鸿岱,姚颖,姚源

## getNameStr({ count: 5 })

杨辰泷,王莉,安然灵,严祥蝉,熊卓栋

## getNameStr({ count: 5, unique: true, givenNameDuplicated: true })

史渊渊,吕梓梓,杜槿槿,严棠棠,周凤凤

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

熊

## getSurname(5)

吴,邱,任,唐,史

## getGivenName()

轩亦

## getGivenName(5)

佳,德舒,子威,佳,文
