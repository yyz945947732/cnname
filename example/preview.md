
# API Preview

## cnname()

汪咏

## cnname("彭")

彭梅

## cnname(5)

曾霞义,汪昊惠,钟伦扬,陆尧熙,丁逸妍

## cnname("姚", 5)

姚光,姚杰,姚槿,姚景,姚洁

## cnname({ count: 5 })

梁逸岳,贺海舒,姜芳,林栩,徐然

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

王翊翊,沈源源,林文文,张尧尧,陆芊芊

## cnname({ count: 5, surname: "张" })

张勋穗,张峰,张镇博,张瑶樱,张晖灵

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张咏辉,张富咏,张霜旭,张惠泽,张阳婉

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊岳,李俊超,李俊晖,李俊昀,李俊震

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张悠英,张龙英,张希英,张英英,张妙英

## cnname({ count: 5, unique: true, part: "surname" })

杨,赖,乔,吴,廖

## cnname({ count: 5, unique: true, part: "givenName" })

皓梅,铄,嫣泓,懿镇,乔

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

贾翔,时晗,羊惠,巢钰,计倩

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

闻人承,子车玲,呼延瑾,东欧馨,太叔修

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

崔柔,雷枫,沈智,彭芳,尹鸿

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

贺垚,贺煜,肖娜,金卓,杜震

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

尉迟芊,公孙富,南宫伟,诸葛琳,慕容炫

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张景,李泷峥,张莉衡,李志健,李义铭

## cnname({ count: 5, unique: true, givenNameType: "male" })

何华勋,叶朗,陈勇斌,秦健仪,李旭

## cnname({ count: 5, unique: true, givenNameType: "female" })

吴岚玲,任英洁,任妙芊,唐心芊,傅洁

## cnname({ count: 5, unique: true, givenNameType: "metal" })

钱铭钰,秦铄,陈铮,高锋锡,沈锡

## cnname({ count: 5, unique: true, givenNameType: "wood" })

吕梧明,曹枫杉,熊槿,贾梧,庞棠

## cnname({ count: 5, unique: true, givenNameType: "water" })

上官仪滨,于滨,魏泓,顾波渊,宋奇洁

## cnname({ count: 5, unique: true, givenNameType: "fire" })

胡晴,徐曦烈,崔炎全,李晗,孙灿

## cnname({ count: 5, unique: true, givenNameType: "earth" })

丁峰然,潘境境,胡峰峥,方城,顾岚

## cnname({ count: 5, unique: true, givenNameType: "all" })

马伦伊,傅辰泷,何绮,孙超,赵志铭

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

崔彩岚,朱培芳,任雨岱,邓珍岩,肖坤

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

钱晗泷,姚煜泓,王晴海,邓泉,宋泽

## cnname({ count: 5, unique: true, gender: "female" })

谢颖,吴心,魏蕊,魏佩,吴敏樱

## cnname({ count: 5, unique: true, elements: "fire" })

邵烁晴,刘炎林,田晖,陈焱灿,钟晖焱

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

余泷岩,郝垚淇,金均,曹基海,邹峰滨

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,高,林,罗,郑,梁,谢,宋,唐,许,韩,冯,邓,曹,彭,曾,肖,田,董,袁,潘,于,蒋,蔡,余,杜,叶,程,魏,苏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,金,石,廖,贾,夏,韦,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,万,钱,严,汤,易,赖,乔,武,常,庞,上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

118

## getAllSurname("common-compound")

上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,高,林,罗,郑,梁,谢,宋,唐,许,韩,冯,邓,曹,彭,曾,肖,田,董,袁,潘,于,蒋,蔡,余,杜,叶,程,魏,苏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,金,石,廖,贾,夏,韦,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,万,钱,严,汤,易,赖,乔,武,常,庞

## getAllSurname("common-single").length

100

## cnnamestr()

冯军

## cnnamestr("彭")

彭莹韵

## cnnamestr(5)

薛丽绮,黎曼,于云富,贺林泓,吕毓潇

## cnnamestr("姚", 5)

姚亦,姚博,姚泽敏,姚萍霜,姚荣

## cnnamestr({ count: 5 })

贾可桂,何博俐,孙贺,段泽,徐德

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

郑露露,廖瑶瑶,马勇勇,姜滨滨,董昆昆

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

邹

## getSurname(5)

吕,田,田,李,杨

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

司马,上官,令狐,夏侯,司徒

## getGivenName()

岩

## getGivenName(5)

媛,岱,景,雨,垚佑

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

竹竹,栋栋,梓梓,心心,浩浩
