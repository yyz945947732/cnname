# API Preview

## cnname()

武妍

## cnname("彭")

彭鸿霞

## cnname(5)

施杉怡,卢槿,余森乔,郭子,谢韵

## cnname("姚", 5)

姚诗,姚玲,姚衡杰,姚钰,姚康均

## cnname({ count: 5 })

聂文,周煜可,郭泉芳,汪菁旭,方嫣

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

许健健,夏洁洁,于尧尧,韩少少,江霏霏

## cnname({ count: 5, surname: "张" })

张雯,张林栋,张善源,张震,张基

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张冠星,张怡渊,张云彤,张瑜昆,张佩琳

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊安,李俊萍,李俊晨,李俊钦,李俊雯

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张锡英,张翼英,张昆英,张衡英,张瑶英

## cnname({ count: 5, unique: true, part: "surname" })

魏,苏,戴,薛,徐

## cnname({ count: 5, unique: true, part: "givenName" })

晓,波信,仪,雪,榆

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

茹柯,拱昀,薛铠,菅林,翁芸

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

东方萧,东欧奕,公西炜,羊舌铮,夏侯航

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

许锴,谭源,吴莹,赵妮,吴纶

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

齐宾,张昀,莫宇,莫燕,郑彦

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

慕容曦,上官庆,诸葛坤,皇甫昭,欧阳璇

## cnname({ count: 5, unique: true, surname: ["张", "李"] })

张俐克,张霖霄,张镇,张磊,李咏栋

## cnname({ count: 5, unique: true, surname: "关" })

关曼倩,关义,关健,关涵永,关豪心

## cnname({ count: 5, unique: true, givenName: ["小桐", "穗宁"] })

吴穗宁,王小桐,高穗宁,林穗宁,傅穗宁

## cnname({ count: 5, unique: true, givenName: "佳运" })

贺佳运,唐佳运,安佳运,汪佳运,沈佳运

## cnname({ count: 5, unique: true, givenNameType: "male" })

戴展,卢宾,许光韬,董天,贾佑

## cnname({ count: 5, unique: true, givenNameType: "female" })

齐梅樱,黎珂,郭芷瑶,李娇梦,文君美

## cnname({ count: 5, unique: true, givenNameType: "metal" })

严铄,方钦,石鑫,尉迟钟锐,秦铠

## cnname({ count: 5, unique: true, givenNameType: "wood" })

颜枫,郭杉,邱杉昕,公孙柏,林桂

## cnname({ count: 5, unique: true, givenNameType: "water" })

任滨,董海阳,庞海,林淼彬,许涛

## cnname({ count: 5, unique: true, givenNameType: "fire" })

杨烈,齐晴煜,赵烽,杨炜,熊安旭

## cnname({ count: 5, unique: true, givenNameType: "earth" })

高城,曾岩,陈元岱,杜岩峰,王垚

## cnname({ count: 5, unique: true, givenNameType: "animal" })

万彪,温善龙,刘鹰,徐燕彬,郭雀

## cnname({ count: 5, unique: true, givenNameType: "all" })

姜鹰,沈佳,谢毅,于扬卓,熊桦炜

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

姚岚,贾垚,黄岱燕,熊均,谭峰

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

何源,孙波曦,李泉,何洁旭,邹源

## cnname({ count: 5, unique: true, gender: "female" })

麦曼信,郭芊,段芸,庞颖,康彤

## cnname({ count: 5, unique: true, elements: "fire" })

石曦泽,戴焱,李烨焱,马炜炜,方晴

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

宋城源,齐岳,秦磊,孙泷境,毛岳

## cnname({ count: 10, unique: true, surnameAlgorithm: "random" })

邹妙翼,慕容佳,毕琦修,罗毅,关庆,韩鲸艳,乔妮,毛鹿岑,殷辉,王炎辰

## cnname({ count: 10, unique: true, surnameAlgorithm: "weight" })

傅勋,洪斌霜,许瑞,袁健钰,吴姬,谢艳泷,廖源,郭馨栋,黄翼鑫,肖柔绮

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,关,雷,柳,上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,澹台

## getAllSurname("common").length

146

## getAllSurname("common-compound")

上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,澹台

## getAllSurname("common-compound").length

16

## getAllSurname("common-single")

王,李,张,陈,刘,杨,黄,胡,赵,周,吴,徐,孙,宋,朱,马,郭,高,曹,林,梁,何,罗,郑,韩,谢,唐,董,傅,冯,许,袁,薛,姚,于,彭,肖,曾,谭,卢,苏,贾,毛,夏,余,邓,闫,戴,江,叶,丁,蔡,程,石,钟,廖,田,任,汪,范,方,潘,杜,魏,沈,万,熊,金,陆,郝,孔,白,崔,康,吕,邱,秦,蒋,姜,史,顾,侯,邵,孟,邹,段,钱,汤,黎,莫,常,尹,武,乔,贺,赖,龚,文,易,洪,庞,龙,殷,施,樊,翟,安,颜,齐,严,涂,陶,温,麦,季,俞,章,鲁,葛,伍,韦,申,尤,毕,聂,娄,焦,关,雷,柳

## getAllSurname("common-single").length

130

## cnnamestr()

郑朗

## cnnamestr("彭")

彭杉

## cnnamestr(5)

曹祺鹰,周森峰,马弘,史歆,贺云

## cnnamestr("姚", 5)

姚晴震,姚宇,姚瑶,姚霞煜,姚瑜梧

## cnnamestr({ count: 5 })

潘少妍,朱妍,张琳,唐蕊,杨梅灵

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

汪峰峰,江欣欣,邱伊伊,涂桐桐,许焕焕

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

王

## getSurname(5)

余,吴,杨,秦,刘

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

上官,东方,司马,欧阳,夏侯

## getGivenName()

琪昀

## getGivenName(5)

承,轩菁,善,光威,凤

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

淼淼
