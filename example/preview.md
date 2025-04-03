# API Preview

## cnname()

朱佑

## cnname("彭")

彭全茜

## cnname(5)

唐勋,段蕊桐,姜翰,邢乔槿,覃良

## cnname("姚", 5)

姚晨,姚辰菁,姚钦,姚腾,姚乔龙

## cnname({ count: 5 })

赖霞,江洁元,蔡柏柏,尹毓嫣,邢晓

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

卢海海,朱韬韬,冯殷殷,姜雨雨,姚宏宏

## cnname({ count: 5, surname: "张" })

张铠,张淇,张麟,张麟柳,张霖鲸

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张潇辰,张蔚梦,张明峥,张利梅,张泽曼

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊婉,李俊瑾,李俊媛,李俊垚,李俊冠

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张鹰英,张悠英,张钰英,张光英,张龙英

## cnname({ count: 5, unique: true, returnType: "surname" })

许,邢,汤,何,姜

## cnname({ count: 5, unique: true, returnType: "givenName" })

莹鹤,槿灵,雪,伊,龙

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "all", givenNameLength: 1 })

叔俊,喻婷,花岑,茹丽,彤亦

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "all", givenNameLength: 1 })

宗政韵,司马妍,公冶永,东方全,濮阳凡

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "common", givenNameLength: 1 })

徐媛,万克,梁萱,关栩,王冠

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "common", givenNameLength: 1 })

诸葛怡,令狐利,欧阳霄,欧阳潇,司徒岑

## cnname({ count: 5, unique: true, surnameType: "single", surnameRarity: "rare", givenNameLength: 1 })

肇熙,殳善,成朗,拱樱,侍咏

## cnname({ count: 5, unique: true, surnameType: "compound", surnameRarity: "rare", givenNameLength: 1 })

微生岱,端木锴,漆雕彬,东方弘,壤驷彬

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

李扬,李铮,张莹,张林晗,张亮莹

## cnname({ count: 5, unique: true, surname: "关" })

关维峰,关绮岱,关宇俊,关岩绮,关星

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

王穗宁,黎小桐,温小桐,李穗宁,彭小桐

## cnname({ count: 5, unique: true, givenName: "佳运" })

聂佳运,龚佳运,夏佳运,张佳运,徐佳运

## cnname({ count: 5, unique: true, givenNameAttributes: "male" })

肖野,卢彬承,胡宾宾,王峰瑞,谢龙殷

## cnname({ count: 5, unique: true, givenNameAttributes: "female" })

顾珍,贾心,史霞,卢嫣,邹绮

## cnname({ count: 5, unique: true, givenNameAttributes: "metal" })

高钧,吴锡宸,谭锐涵,姜锋,钱铭镇

## cnname({ count: 5, unique: true, givenNameAttributes: "wood" })

陈柏,何棠宸,蒋榆桂,肖栩,沈槿松

## cnname({ count: 5, unique: true, givenNameAttributes: "water" })

温竹淼,邢渊,凌沐雅,李洁泓,赖雅洁

## cnname({ count: 5, unique: true, givenNameAttributes: "fire" })

钟信烁,黄灿,邱利晗,丁炜,王翰烈

## cnname({ count: 5, unique: true, givenNameAttributes: "earth" })

赵岚,郭岩,熊基,何坤城,孙境

## cnname({ count: 5, unique: true, givenNameAttributes: "animal" })

龙燕,吴鹿,徐蝉,耿鹤,郭蝉

## cnname({ count: 5, unique: true, givenNameAttributes: "all" })

杨昱,齐衡宸,聂嘉,方毅,邓鱼

## cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

黄峰琦,于基,詹峻,史峰依,秦岳

## cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

方波,胡海,史沐,邓泽晗,孔晗涵

## cnname({ count: 5, unique: true, gender: "female" })

郭舒珂,陈穗萍,吴韵睿,周露安,李信倩

## cnname({ count: 5, unique: true, wuxing: "fire" })

易炫远,张炫焕,陈烨,程炎,谭晴

## cnname({ count: 5, unique: true, wuxing: "earth", givenNameAttributes: "water" })

黄波垚,方海垚,闫坤泉,袁基源,王峰涛

## cnname({ count: 10, unique: true, surnamePickStrategy: "random" })

谭韵,司徒华滨,贾芷伊,殷天,闫伦毅,甘康,施菁,魏雀榆,郝航蕊,万烨

## cnname({ count: 10, unique: true, surnamePickStrategy: "weight" })

邓栋,胡怡,沈智野,杨焱亮,李瑶,黎娇彤,袁烈全,刘海清,苏轩,陶涵韬

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurnames("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕,欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurnames("common").length

162

## getAllSurnames("common", "compound")

欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurnames("common", "compound").length

12

## getAllSurnames("common", "single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕

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

## cnnamestr()

郭哲

## cnnamestr("彭")

彭钦依

## cnnamestr(5)

史子,谢棠,江惠,邱奇,邢博

## cnnamestr("姚", 5)

姚慧浩,姚劲穗,姚歆,姚焱,姚玲竹

## cnnamestr({ count: 5 })

孙衡,蔡霄,崔澜铠,曹岑强,邓奇萱

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

张志志,江昕昕,符哲哲,胡珍珍,崔钧钧

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

罗

## getSurname(5)

杜,龚,陆,甘,汤

## getSurname({ count: 5, surnameType: "compound", unique: true })

诸葛,慕容,上官,令狐,司徒

## getGivenName()

星

## getGivenName(5)

希,珂炫,蝉佳,义,光绮

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

辰辰
