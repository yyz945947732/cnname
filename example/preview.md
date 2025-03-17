
# API Preview

## cnname()

张心

## cnname("彭")

彭震楠

## cnname(5)

涂茹昱,冯佑熙,石坤军,韩珊,聂境

## cnname("姚", 5)

姚健,姚扬铮,姚富馨,姚志,姚殷冠

## cnname({ count: 5 })

余鼎,汤秋珍,蒋林泓,魏泉,陆景

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

邓善善,易富富,史佑佑,张景景,吕涵涵

## cnname({ count: 5, surname: "张" })

张惠,张琦奇,张元烁,张宇祥,张瑞

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张澜翔,张哲航,张佩泷,张萧钟,张昆皓

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊汶,李俊逸,李俊宁,李俊歆,李俊乐

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张航英,张蔚英,张博英,张澜英,张惠英

## cnname({ count: 5, unique: true, part: "surname" })

贾,邵,余,傅,万

## cnname({ count: 5, unique: true, part: "givenName" })

美松,炎丽,柯,信,瑞

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

委天,鞠翊,冷炫,敏希,丹奕

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

夏侯钦,宗政彬,皇甫卓,轩辕锐,子车琳

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

马秋,单汶,成超,石珍,方源

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

姚昭,董宏,姜潇,邓穗,施衡

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司马豪,尉迟烁,司马震,夏侯智,公孙彩

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张涵倩,李雪,李穗辰,张泽可,张智

## cnname({ count: 5, unique: true, givenNameType: "male" })

李良,马劲鼎,崔希勋,樊朗,吴博维

## cnname({ count: 5, unique: true, givenNameType: "female" })

曹阳沐,吕舒琳,何乐珊,白艳,冯绣语

## cnname({ count: 5, unique: true, givenNameType: "metal" })

曾钧,康钧,谭霖铮,刘铄钟,余钧全

## cnname({ count: 5, unique: true, givenNameType: "wood" })

谢栩,涂柳槿,邹宇榆,孙希棠,蔡瑜榆

## cnname({ count: 5, unique: true, givenNameType: "water" })

严源,孔洁,王淼潇,彭滨渊,曹宇泽

## cnname({ count: 5, unique: true, givenNameType: "fire" })

司全晴,邓烁炜,萧燚昕,吕旭炎,石曦

## cnname({ count: 5, unique: true, givenNameType: "earth" })

蔡潇垚,徐城,张均,王峻,曾安岳

## cnname({ count: 5, unique: true, givenNameType: "all" })

杨飞雪,林燕,潘梅萧,毛加岳,侯扬

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

徐境莹,侯基媛,屈均,范峻,王彩峻

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

白泷灿,范涛烈,翁泽烽,柯泓,陆淼

## cnname({ count: 5, unique: true, gender: "female" })

顾芷,钟蔚希,于姬,郑霜,房菁倩

## cnname({ count: 5, unique: true, elements: "fire" })

马晖,顾燚,朱晴,许炫,石昀炎

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

吴垚波,汤城,章培泉,邹岚,魏城

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

党萧

## cnnamestr("彭")

彭芮

## cnnamestr(5)

沈钧昊,钟梅好,夏舒卫,司慧德,方琦

## cnnamestr("姚", 5)

姚磊,姚昆,姚芊,姚珍茹,姚涛

## cnnamestr({ count: 5 })

彭烽敏,常震奇,关景翔,贺信,尹翔

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

崔渊渊,毛梅梅,万然然,杜茵茵,余彬彬

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

贺

## getSurname(5)

丁,丘,田,邵,毛

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

长孙,夏侯,司马,司空,上官

## getGivenName()

祥

## getGivenName(5)

桐,泷佑,乐,依,栋炫

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

华华,好好,阳阳,翼翼,锐锐
