# API Preview

## getName()

杨林

## getName("彭")

彭子逸

## getName(5)

章东诗,方岳思,史芸,黄卫,林军

## getName("姚", 5)

姚韬澜,姚冠珊,姚雨云,姚麟,姚宇

## getName({ count: 5 })

秦昱梅,刘珂荣,赖德,潘海军,曾麟

## getName({ count: 5, unique: true, givenNameDuplicated: true })

萧文文,王震震,余彤彤,余焱焱,倪逸逸

## getName({ count: 5, surname: "张" })

张南峻,张康林,张瑞海,张姬,张炎

## getName({ count: 5, surname: "张", givenNameLength: 2 })

张晴慧,张源焱,张佑淇,张全铄,张语莉

## getName({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊展,李俊柯,李俊祺,李俊岩,李俊然

## getName({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张熙英,张林英,张劲英,张晖英,张萧英

## getName({ count: 5, unique: true, returnType: "surname" })

于,贺,崔,卢,孙

## getName({ count: 5, unique: true, returnType: "givenName" })

岚光,昊劲,泉,星渊,锴元

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

代华,戚晴,错芸,阎嘉,禚滨

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

端木元,申屠露,宗政绣,东方城,夏侯媛

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

吕超,伍林,范锐,林晗,王桐

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

欧阳歆,欧阳惠,欧阳尧,令狐慧,上官松

## getName({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

年铮,支柯,璩露,蒙枫,逮钧

## getName({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

百里艳,东郭昀,聂晁焕,钟离宏,左丘鑫

## getName({ count: 5, unique: true, surname: ["张", "李"] })

张慧,张然林,张乔,张劲镇,张义泽

## getName({ count: 5, unique: true, surname: "关" })

关睿梧,关浩,关咏,关桂垚,关磊诗

## getName({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

董小桐,熊小桐,何小桐,易小桐,徐小桐

## getName({ count: 5, unique: true, givenName: "佳运" })

孙佳运,周佳运,李佳运,万佳运,莫佳运

## getName({ count: 5, unique: true, givenNameAttributes: "male" })

文卫伦,李泽德,殷宇彦,白健卫,杜俊智

## getName({ count: 5, unique: true, givenNameAttributes: "female" })

沈惠景,龚婉,陈静,石然雯,张露

## getName({ count: 5, unique: true, givenNameAttributes: "metal" })

韩锐彬,翟锴锋,马铠鑫,孟梓铄,吴镇铮

## getName({ count: 5, unique: true, givenNameAttributes: "wood" })

陶枫祺,曾棠,程桐,易佑桐,付桐森

## getName({ count: 5, unique: true, givenNameAttributes: "water" })

尉迟泓泷,方淼渊,谭泷泓,纪沐,严涵

## getName({ count: 5, unique: true, givenNameAttributes: "fire" })

朱曦炎,鲁曦舒,石佑焕,廖烈灿,许衡烁

## getName({ count: 5, unique: true, givenNameAttributes: "earth" })

邹瑜峻,宋磊,潘岱均,康岩修,李峥峰

## getName({ count: 5, unique: true, givenNameAttributes: "animal" })

黄麟文,方鹿,聂凤昱,沈阳龙,曾鹤

## getName({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

韩岩霏,皇甫岩茹,夏岩,谢岩,许城

## getName({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

马渊,朱炎海,阎涛煜,贾洁晖,叶海

## getName({ count: 5, unique: true, gender: "female" })

卢卓晴,孟英,戴怡嫣,赖珊霏,潘萍萍

## getName({ count: 5, unique: true, wuxing: "fire" })

姜烽子,沈烨佳,田焱,徐旭伊,方炜炜

## getName({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

卢泓岩,陈泷岳,何培,赵城,阎城

## getName({ count: 10, unique: true, surnamePickStrategy: "random" })

邓霞君,张柔,丁龙,赵航勋,黄钟,林芷劲,钱峥姬,章远咏,范垚,钱昱沐

## getName({ count: 10, unique: true, surnamePickStrategy: "weight" })

万媛,赵祺,谢丽南,邹涛辰,唐泷信,白宾,覃晴岚,谢鹤,余霄钧,钟明锡

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

薛泷燕

## getNameStr("彭")

彭悠

## getNameStr(5)

谢境宁,丁曼莉,包修,苏麟,胡光

## getNameStr("姚", 5)

姚旭林,姚鱼,姚宁柔,姚沐媛,姚锡

## getNameStr({ count: 5 })

高龙,庄纶,韦铭伟,段烨峰,侯焕

## getNameStr({ count: 5, unique: true, givenNameDuplicated: true })

包浩浩,肖灿灿,徐岑岑,苏渊渊,覃煜煜

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

叶

## getSurname(5)

郑,陆,崔,赵,王

## getGivenName()

慧扬

## getGivenName(5)

峻桂,莉,文琳,佩泷,松
