
# API Preview

## cnname()

黄安晖

## cnname("彭")

彭铭豪

## cnname(5)

杨波,郑龙,苏佩楠,赵欣,彭庆馨

## cnname("姚", 5)

姚卓,姚劲轩,姚珂莉,姚懿,姚勋莉

## cnname({ count: 5 })

侯雯修,许岩,王楠,孙峥希,武基

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

李维维,龙坤坤,罗泽泽,汪炜炜,符馨馨

## cnname({ count: 5, surname: "张" })

张楠震,张星,张昕健,张楠,张俊钜

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张涛昆,张文珍,张勇柔,张绮乐,张柔昊

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊衡,李俊亮,李俊慧,李俊娜,李俊朗

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张琳英,张澜英,张俪英,张健英,张庆英

## cnname({ count: 5, unique: true, part: "surname" })

谢,万,陈,于,贺

## cnname({ count: 5, unique: true, part: "givenName" })

璋冠,彩荣,诗,辉逸,勋峻

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

嵇舒,茆棠,冯昱,高霜,贡翊

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

东郭元,皇甫岚,壤驷璋,宇文榆,欧阳霜

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

俞杉,伍垒,胡梧,贾华,张佳

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

戴烁,韩湛,俞炫,卢钰,张杰

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司徒杉,欧阳昊,诸葛绣,轩辕艳,司徒岱

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李昕珂,张晖,李怡,张晨,张嘉轩

## cnname({ count: 5, unique: true, givenNameType: "male" })

石景宇,姜炎,梁昊,左远富,范华

## cnname({ count: 5, unique: true, givenNameType: "female" })

万萍,邓霞,康颖依,汤馨,夏柔

## cnname({ count: 5, unique: true, givenNameType: "metal" })

文逸锐,符钟,崔锻鑫,白锻锻,柯铠

## cnname({ count: 5, unique: true, givenNameType: "wood" })

卢樱,瞿樱安,赖杉,苏楠森,孟棠诚

## cnname({ count: 5, unique: true, givenNameType: "water" })

熊涛,杜涵深,任深波,卫波,宋涟

## cnname({ count: 5, unique: true, givenNameType: "fire" })

熊煜,陈旭,袁焱,任炫,杜旭

## cnname({ count: 5, unique: true, givenNameType: "earth" })

樊培培,伍城,薛基坤,上官岳,卢岳舒

## cnname({ count: 5, unique: true, givenNameType: "all" })

高毅,牛乔,杜诗云,费冠,白彤滨

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,俞,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,麦,涂,蓝,雷,丘,闻,庞,党,左,上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

170

## getAllSurname("common-compound")

上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,俞,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,麦,涂,蓝,雷,丘,闻,庞,党,左

## getAllSurname("common-single").length

152

## cnnamestr()

董炀

## cnnamestr("彭")

彭骏

## cnnamestr(5)

傅华,林乐,陈悠,龙基文,薛霜维

## cnnamestr("姚", 5)

姚锡,姚锴,姚杰衡,姚书海,姚林丽

## cnnamestr({ count: 5 })

金樱野,郝芊,翁伊,常涛,刘贺翊

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

郭朗朗,余景景,廖韵韵,庄博博,汪晴晴

## parseName("张三")

{"surname":"张","givenName":"三","givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":true,"isGivenNameDuplicated":false,"isCommonSurname":true}

## parseName("笑三")

{"surname":"","givenName":"笑三","givenNameLength":2,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":false}

## parseName("三")

{"surname":"","givenName":"三","givenNameLength":1,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":false}

## parseName("")

{"surname":"","givenName":"","givenNameLength":0,"isCompoundSurname":false,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":false}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三","givenNameLength":1,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":false,"isCommonSurname":true}

## parseName("欧阳娜娜")

{"surname":"欧阳","givenName":"娜娜","givenNameLength":2,"isCompoundSurname":true,"isSingleCharacterSurname":false,"isGivenNameDuplicated":true,"isCommonSurname":true}

## getSurname()

曹

## getSurname(5)

章,熊,钱,苏,崔

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

慕容,诸葛,令狐,欧阳,司徒

## getGivenName()

烈睿

## getGivenName(5)

运,腾嘉,予,卓逸,枫

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

卫卫,锴锴,宏宏,皓皓,琪琪
