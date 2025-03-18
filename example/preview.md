
# API Preview

## cnname()

樊祺

## cnname("彭")

彭珍晓

## cnname(5)

袁滨玲,董瑶桐,田琪,吴妍,蔡灵

## cnname("姚", 5)

姚沐,姚俊,姚霏,姚华彤,姚婷晨

## cnname({ count: 5 })

林涛,白心梅,杨英朗,于伊,曾依彬

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

蓝丽丽,谭然然,杨燚燚,莫沐沐,欧信信

## cnname({ count: 5, surname: "张" })

张祺,张懿俐,张劲,张怡可,张皓毓

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张睿乔,张奇辰,张琪栋,张贺翔,张辉清

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊均,李俊昱,李俊辉,李俊楠,李俊信

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张熙英,张松英,张锐英,张熙英,张全英

## cnname({ count: 5, unique: true, part: "surname" })

俞,冯,周,于,李

## cnname({ count: 5, unique: true, part: "givenName" })

培,韵劲,烁心,翊雯,彤熙

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

合峥,钦瑾,次楠,施韬,茅昱

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

子车芊,公冶岚,公羊瑶,南门鼎,谷梁敏

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

董景,樊茵,曾铮,卢樱,聂佩

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

崔华,魏贺,赵勇,郑炜,傅茜

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司空浩,司徒均,令狐彦,司徒榆,慕容俐

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张炎桦,张永强,张灿,张芊芳,张雨竹

## cnname({ count: 5, unique: true, givenNameType: "male" })

郭源伦,魏杰天,俞富鸿,韩祥,方智

## cnname({ count: 5, unique: true, givenNameType: "female" })

崔韵雪,史嫣露,陈娇茜,叶静峥,冯梅惠

## cnname({ count: 5, unique: true, givenNameType: "metal" })

钱哲锦,孙铮,潘鑫铮,周钦毓,汪钦铠

## cnname({ count: 5, unique: true, givenNameType: "wood" })

赵栋松,胡楠,夏杉,杨森枫,蔡栋柏

## cnname({ count: 5, unique: true, givenNameType: "water" })

施洁滨,林涛,姜洁,祝晓泓,马霄洁

## cnname({ count: 5, unique: true, givenNameType: "fire" })

罗晗焱,任烈焕,赖晴林,于炫,林燚晴

## cnname({ count: 5, unique: true, givenNameType: "earth" })

白峥岩,江全岩,丁培,史岱,俞峰

## cnname({ count: 5, unique: true, givenNameType: "all" })

董君诚,石凯源,龙辉涵,魏岩逸,佟婉

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

康岚,侯韵磊,吴岚,郝均,李敏境

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

丁旭波,车沐,薛源,丘淼曦,潘洁晴

## cnname({ count: 5, unique: true, gender: "female" })

公孙雪梅,吴茹沐,周诗,姜宏蕊,韩岑

## cnname({ count: 5, unique: true, elements: "fire" })

曹仪炎,费灿林,邓焕辰,屈灿,程燚煜

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

刘磊,谢垚,方垚,龙培,巢滨均

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

易芊馨

## cnnamestr("彭")

彭茵颖

## cnnamestr(5)

韩燕珊,白泽俊,彭翔,高城,翟蕊

## cnnamestr("姚", 5)

姚绮熙,姚鑫,姚铄,姚霏,姚娜焱

## cnnamestr({ count: 5 })

钱子,曹玲信,邓槿斌,曾霞淼,方婷

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

甄劲劲,白琦琦,邵源源,倪柏柏,石景景

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

于

## getSurname(5)

于,蒲,钟,沈,崔

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

慕容,司空,诸葛,夏侯,上官

## getGivenName()

富芸

## getGivenName(5)

华,芮轩,炎鑫,煜,克棠

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

浩浩,媛媛,镇镇,诚诚,良良
