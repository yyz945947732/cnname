# API Preview

## cnname()

邵曦云

## cnname("彭")

彭昀

## cnname(5)

孙灿,林军光,崔琪峥,李芳,田俐

## cnname("姚", 5)

姚凡焕,姚泽,姚峥,姚晨,姚露

## cnname({ count: 5 })

唐蕊枫,田钟诗,覃健,庞泓蕊,甘杉贺

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

丁庆庆,杨芮芮,何烽烽,罗萱萱,邓艳艳

## cnname({ count: 5, surname: "张" })

张昀霞,张永贺,张晓,张伟康,张咏

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张绮境,张懿昆,张宸承,张钟辰,张镇蕊

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊鼎,李俊乐,李俊焱,李俊敏,李俊军

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张殷英,张渊英,张博英,张冠英,张佑英

## cnname({ count: 5, unique: true, part: "surname" })

曾,吕,孙,葛,孟

## cnname({ count: 5, unique: true, part: "givenName" })

永,鹤,勋竹,欣,子

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

唐彪,褚依,声舒,阳少,田展

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

皇甫钰,上官琦,宇文鹤,鲜于歆,夏侯锡

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

闫凌,杜卓,梁卫,殷蝉,常梧

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

钱坤,宋姬,徐勇,任语,董祥

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

申屠佩,上官柯,诸葛敏,令狐哲,司徒曦

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

李宾,李珂,张伊,张宾源,张昆

## cnname({ count: 5, unique: true, surname: "关" })

关茵文,关蕊克,关灿桦,关昕鹰,关琳

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

韦穗宁,苏小桐,张穗宁,乔穗宁,葛小桐

## cnname({ count: 5, unique: true, givenName: "佳运" })

蒋佳运,冯佳运,邵佳运,卢佳运,包佳运

## cnname({ count: 5, unique: true, givenNameType: "male" })

唐俊,安炎善,郭昭翼,于良光,赵宸诚

## cnname({ count: 5, unique: true, givenNameType: "female" })

唐瑶静,秦彩,梅明芊,董静,谭姬

## cnname({ count: 5, unique: true, givenNameType: "metal" })

叶钦,叶镇,伍锡,贺钰,温镇

## cnname({ count: 5, unique: true, givenNameType: "wood" })

吴梧,杜凡森,岳柏,周柯柳,曹槿栋

## cnname({ count: 5, unique: true, givenNameType: "water" })

柯淇,殷铭源,洪滨昱,孔殷泓,尹泓

## cnname({ count: 5, unique: true, givenNameType: "fire" })

袁炫君,邹晴,袁焕奇,徐焕,关晖

## cnname({ count: 5, unique: true, givenNameType: "earth" })

董城,朱岱,何岳,龚峰佑,姚岱

## cnname({ count: 5, unique: true, givenNameType: "animal" })

彭凤然,廖鹤,韦蝉,赵燕,林燕

## cnname({ count: 5, unique: true, givenNameType: "all" })

陶运,陶枫,姜烁,郭富,聂昕

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

唐慧岳,方颖坤,左均,沈峰,尹基

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

赵涛,吕海,李沐,孟泽,韩涵

## cnname({ count: 5, unique: true, gender: "female" })

包英妍,曹翰梦,黄倩,武茵,程嫣

## cnname({ count: 5, unique: true, elements: "fire" })

崔晗,任煜,刘炜,贺瑾晖,殷炎卓

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

陆海基,许峥泉,卢培,赖基沐,谭磊

## cnname({ count: 10, unique: true, surnameAlgorithm: "random" })

廖佩,薛峥,欧阳雯蝶,钱鑫,陶彩,耿澜哲,汪歆,方蕊,罗珂云,耿蝶珂

## cnname({ count: 10, unique: true, surnameAlgorithm: "weight" })

马昊,吕梦瑾,苏浩琳,潘灿,朱彦阳,廖鑫,尚雯,潘可,樊宇,高全运

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

龙韬

## cnnamestr("彭")

彭妮

## cnnamestr(5)

葛宁,龙垚莹,尚克思,贺菁智,戴全晖

## cnnamestr("姚", 5)

姚梧锡,姚松,姚渊,姚毅阳,姚钦

## cnnamestr({ count: 5 })

任烁柯,熊超,石潇泉,樊峰渊,易纶

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

江雨雨,彭均均,安慧慧,白浩浩,唐曼曼

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

彭

## getSurname(5)

宁,颜,罗,陈,余

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

司马,申屠,欧阳,上官,皇甫

## getGivenName()

栋

## getGivenName(5)

锐,蝉,逸静,奕曼,淇

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

雪雪
