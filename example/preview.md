# API Preview

## cnname()

岳珂

## cnname("彭")

彭莉

## cnname(5)

罗奕,施穗依,梁锴,李展,谢景

## cnname("姚", 5)

姚萱龙,姚云皓,姚馨潇,姚维,姚渊

## cnname({ count: 5 })

袁荣,叶良祺,段乔,兰妍,白皓萍

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

张慧慧,凌承承,董茜茜,钟桂桂,李岩岩

## cnname({ count: 5, surname: "张" })

张境,张杰,张瑞馨,张博玲,张曼

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张钦殷,张丽昱,张绮峥,张旭菁,张灵健

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊维,李俊彦,李俊扬,李俊柯,李俊亮

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张佳英,张俐英,张全英,张依英,张柔英

## cnname({ count: 5, unique: true, returnType: "surname" })

崔,齐,马,郭,朱

## cnname({ count: 5, unique: true, returnType: "givenName" })

柔,海,芊,渊然,淼曼

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

通梧,陀颖,劳霏,邱勋,焦然

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

壤驷锦,令狐峻,诸葛柏,仲孙阳,太叔野

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

范骏,林睿,司马桦,兰佑,吴维

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

孙翊,杜铮,邢霜,庞锴,马文

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

欧阳钟,欧阳岑,诸葛琳,皇甫鲸,诸葛宾

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

张怡,张凡鱼,张绣,张昭,李燕歆

## cnname({ count: 5, unique: true, surname: "关" })

关鸿娇,关景,关鱼,关萱,关亦利

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

左小桐,姚穗宁,孙小桐,张小桐,蔡小桐

## cnname({ count: 5, unique: true, givenName: "佳运" })

谢佳运,吴佳运,冯佳运,金佳运,郑佳运

## cnname({ count: 5, unique: true, givenNameType: "male" })

夏翊瑞,陈超,郑俊翰,蒋勋德,唐昭

## cnname({ count: 5, unique: true, givenNameType: "female" })

董美欣,宋彩,柳蕊,陆殷媛,常芳妙

## cnname({ count: 5, unique: true, givenNameType: "metal" })

姜钧,江锡钦,潘锐镇,龙铮霖,鲁钟

## cnname({ count: 5, unique: true, givenNameType: "wood" })

邹栋,吕槿枫,叶桦,陈栋,欧楠

## cnname({ count: 5, unique: true, givenNameType: "water" })

赖康淇,蔡海,毛泽,梁波,周涛涛

## cnname({ count: 5, unique: true, givenNameType: "fire" })

蒋烁,孙炎衡,陈晖,段炫焕,孙云晗

## cnname({ count: 5, unique: true, givenNameType: "earth" })

白垚,曾峥垚,程岱,程岳,白岚佳

## cnname({ count: 5, unique: true, givenNameType: "animal" })

冯霄鲸,田蝉,宁蝶,唐鹰君,杨鹿宏

## cnname({ count: 5, unique: true, givenNameType: "all" })

于炫,安城娜,白淇依,姚凯富,江强书

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

颜婷培,范坤,于霜均,段垚,蔡雪岱

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

杨焕泓,石晖波,田波炎,郭波,周海

## cnname({ count: 5, unique: true, gender: "female" })

施珍,颜彤韵,苏汶燕,叶琦语,庞穗颖

## cnname({ count: 5, unique: true, elements: "fire" })

武烨炎,魏晖烨,贾炜炫,何皓焕,吕煜晴

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

袁峻,田均,苏垚涵,尹沐垚,潘岱

## cnname({ count: 10, unique: true, surnameAlgorithm: "random" })

庞清展,李源,姚诚语,童皓,庄豪,夏荣,严炜,杨萧依,焦芮亦,程强

## cnname({ count: 10, unique: true, surnameAlgorithm: "weight" })

张勇,朱康沐,李俪翼,董冠,郑欣,陈秋,庞基焱,廖凤倩,朱潇鲸,郑钰劲

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

吴元

## cnnamestr("彭")

彭文霜

## cnnamestr(5)

伍华翊,王槿,薛光,谢蝶,姚晗

## cnnamestr("姚", 5)

姚蕊韵,姚瑶,姚志睿,姚锦燕,姚鲸

## cnnamestr({ count: 5 })

沈伟沐,贺媛,梁樱,金佳霜,蔡乐纶

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

徐涛涛,于鹿鹿,郭昱昱,马祺祺,翟沐沐

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

高

## getSurname(5)

马,张,傅,邹,蔡

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

欧阳,诸葛,司徒,申屠,令狐

## getGivenName()

媛少

## getGivenName(5)

馨歆,康均,诗岑,樱岚,凌卫

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

莹莹
