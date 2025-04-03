# API Preview

## cnname()

牛昱

## cnname("彭")

彭超

## cnname(5)

龙芳,肖岚嘉,金菁,方辉志,葛心静

## cnname("姚", 5)

姚彤熙,姚乔煜,姚均诚,姚可,姚岩凤

## cnname({ count: 5 })

钟汶,曾城锦,余楠,邱军,倪宸霜

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

刘嫣嫣,钟健健,朱华华,俞境境,雷凡凡

## cnname({ count: 5, surname: "张" })

张韬,张梧,张均宸,张榆骏,张智

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张锐雪,张梧彬,张光渊,张殷涵,张芷源

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊奇,李俊锦,李俊彪,李俊依,李俊衡

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张雀英,张斌英,张伊英,张境英,张雀英

## cnname({ count: 5, unique: true, returnType: "surname" })

田,郝,雷,冯,杜

## cnname({ count: 5, unique: true, returnType: "givenName" })

承晨,朗,基炎,昀婷,佩鲸

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

後运,飞均,钮祥,端瑞,竭韬

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

皇甫蝉,申屠瑾,欧阳诗,万俟弘,仲孙菁

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

杨渊,秦弘,熊淇,孙弘,万惠

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

王彩,殷妍,夏艳,黄亮,唐婷

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

皇甫泓,皇甫静,欧阳烈,申屠彤,司马昀

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

张毅,李岳,李俊善,张凯,张天灿

## cnname({ count: 5, unique: true, surname: "关" })

关善,关轩强,关峰曦,关奇,关思

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

文小桐,马穗宁,孙穗宁,向小桐,赖穗宁

## cnname({ count: 5, unique: true, givenName: "佳运" })

袁佳运,尹佳运,姚佳运,叶佳运,柳佳运

## cnname({ count: 5, unique: true, givenNameAttributes: "male" })

顾豪,高弘昭,薛超,孔冠,陈峻

## cnname({ count: 5, unique: true, givenNameAttributes: "female" })

罗蔚嫣,徐俐,韩珊,岳婷婷,韩睿尧

## cnname({ count: 5, unique: true, givenNameAttributes: "metal" })

高钧义,蒋锋,孔钦铭,殷铭,伍锡

## cnname({ count: 5, unique: true, givenNameAttributes: "wood" })

马杉,胡榆,周梧桂,冯栩,令狐善栋

## cnname({ count: 5, unique: true, givenNameAttributes: "water" })

高乐波,罗涵,毛淼,聂泓涛,王渊波

## cnname({ count: 5, unique: true, givenNameAttributes: "fire" })

徐皓炎,甘晗,白炎,董烽,郭烈琪

## cnname({ count: 5, unique: true, givenNameAttributes: "earth" })

潘磊,李岱,宋凡坤,汤均,邢永均

## cnname({ count: 5, unique: true, givenNameAttributes: "animal" })

潘鹰,何鹰晨,戴潇鹰,孟燕,赖蝉

## cnname({ count: 5, unique: true, givenNameAttributes: "all" })

卢泓,沈萧,洪辰安,王德扬,黄焱

## cnname({ count: 5, unique: true, givenNameAttributes: ["earth", "female"] })

陈峰丽,白娇岩,潘岱,韦茵培,魏曼均

## cnname({ count: 5, unique: true, givenNameAttributes: ["water", "fire"] })

沈淼,梁炜泓,刘渊,袁滨,潘涛

## cnname({ count: 5, unique: true, gender: "female" })

孔萱语,贺琦菁,樊萍,范霞,蒋琦辰

## cnname({ count: 5, unique: true, elements: "fire" })

薛曦,龚晖煜,杨晗,郭烁旭,贾炎

## cnname({ count: 5, unique: true, elements: "earth", givenNameAttributes: "water" })

林岳,段培,叶峥,蒋境,叶涛岱

## cnname({ count: 10, unique: true, surnamePickStrategy: "random" })

韦樱,牛鑫鹰,任绮,文绮铄,廖清,侯萍清,伍槿扬,任鹿珊,石轩云,崔柯伊

## cnname({ count: 10, unique: true, surnamePickStrategy: "weight" })

方樱,江全维,高浩海,汪霄彬,任磊彪,潘运梅,廖腾蔚,贺灵,钟奕滨,朱卓善

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕,欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurname("common").length

162

## getAllSurname("common-compound")

欧阳,上官,皇甫,令狐,诸葛,司徒,司马,申屠,夏侯,慕容,尉迟,长孙

## getAllSurname("common-compound").length

12

## getAllSurname("common-single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,林,郭,何,高,罗,郑,梁,谢,宋,唐,许,冯,韩,邓,曹,彭,曾,肖,田,董,潘,袁,于,蒋,蔡,余,杜,叶,程,苏,魏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,廖,石,金,韦,贾,夏,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,赖,万,钱,严,覃,武,戴,莫,孔,向,汤,常,温,康,洪,施,文,牛,樊,葛,邢,安,齐,易,乔,伍,庞,颜,倪,庄,聂,章,鲁,岳,翟,殷,詹,申,欧,耿,关,兰,焦,俞,左,柳,甘,祝,包,宁,尚,符,舒,阮,柯,纪,梅,童,凌,毕

## getAllSurname("common-single").length

150

## cnnamestr()

金蔚

## cnnamestr("彭")

彭劲

## cnnamestr(5)

谭扬燕,程嘉菁,符岑,文轩柳,韦俐

## cnnamestr("姚", 5)

姚焕樱,姚丽焕,姚柯凌,姚书,姚铮曼

## cnnamestr({ count: 5 })

蔡柔,温天,苏旭智,姚思信,章淼懿

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

徐克克,吴伦伦,覃曼曼,尹淼淼,方霄霄

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

何

## getSurname(5)

龚,赖,严,齐,余

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

皇甫,司徒,申屠,司马,夏侯

## getGivenName()

腾

## getGivenName(5)

基,楠,凯,朗,梦

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

辉辉
