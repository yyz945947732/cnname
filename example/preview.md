
# API Preview

## cnname()

龙逸

## cnname("彭")

彭珍澜

## cnname(5)

肖全,袁萱曦,徐霄维,陶歆雅,周明

## cnname("姚", 5)

姚心,姚逸,姚睿,姚境丽,姚辰桐

## cnname({ count: 5 })

沈翊仪,侯柔嫣,郭露韬,白霄,澹台乐翼

## cnname({ count: 5, unique: true, givenNameDuplicated: true })

秦淼淼,朱翔翔,钟慧慧,曾伟伟,徐滨滨

## cnname({ count: 5, surname: "张" })

张梅,张芳,张淇,张倩晖,张劲城

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张浩安,张清沐,张昊熙,张强琪,张霏焱

## cnname({ count: 5, surname: "李", givenNameLength: 2, givenNameStartsWith: "俊" })

李俊欣,李俊茵,李俊敏,李俊岱,李俊岑

## cnname({ count: 5, surname: "张", givenNameLength: 2, givenNameEndsWith: "英" })

张敏英,张莹英,张泓英,张伊英,张钟英

## cnname({ count: 5, unique: true, part: "surname" })

姚,朱,马,孙,唐

## cnname({ count: 5, unique: true, part: "givenName" })

奕奕,子昕,德,栋穗,柯

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

柏艳,公泉,芮良,景芊,乜柳

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

呼延承,上官舒,公良伊,漆雕栩,东方澜

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

梁穗,叶庆,汪锐,郭岑,魏豪

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

周瑾,范韬,孙思,罗瑜,高锋

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

慕容宁,皇甫岚,欧阳灿,公孙柳,南宫淼

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张运,张安,张倩镇,张森,张铭

## cnname({ count: 5, unique: true, givenNameType: "male" })

王雅源,沈威,冯奕,许熙锐,邹腾智

## cnname({ count: 5, unique: true, givenNameType: "female" })

叶心,石瑶,李蔚丽,万翊茜,彭娜

## cnname({ count: 5, unique: true, givenNameType: "metal" })

于锡钰,冯锐秋,叶铭,韦锡,卢锴锐

## cnname({ count: 5, unique: true, givenNameType: "wood" })

任栩,苏栩,罗槿枫,姚柳桦,叶楠槿

## cnname({ count: 5, unique: true, givenNameType: "water" })

冯泓涛,徐奇海,刘波,任泽,杨洁

## cnname({ count: 5, unique: true, givenNameType: "fire" })

段焕,秦灿,江焕焕,蔡晗,段旭烁

## cnname({ count: 5, unique: true, givenNameType: "earth" })

韩基,白磊培,郑培,贺基,贾境

## cnname({ count: 5, unique: true, givenNameType: "all" })

苏茵祺,徐安祺,王莹龙,黄炜元,司马辰均

## cnname({ count: 5, unique: true, givenNameType: ["earth", "female"] })

许芷培,许垚佩,袁岱,丁峻,崔岱颖

## cnname({ count: 5, unique: true, givenNameType: ["water", "fire"] })

谢泓,程焱沐,汪渊灿,唐涛灿,叶洁晖

## cnname({ count: 5, unique: true, gender: "female" })

钟岑,王芷,沈樱晴,陈菁莹,史霏怡

## cnname({ count: 5, unique: true, elements: "fire" })

常焕炜,何航燚,吕焕,熊晖,刘曦

## cnname({ count: 5, unique: true, elements: "earth", givenNameType: "water" })

冯境,谭峥泓,夏峰泽,郑峻,史基

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,高,林,罗,郑,梁,谢,宋,唐,许,韩,冯,邓,曹,彭,曾,肖,田,董,袁,潘,于,蒋,蔡,余,杜,叶,程,魏,苏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,金,石,廖,贾,夏,韦,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,万,钱,严,汤,易,赖,乔,武,常,娄,上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

118

## getAllSurname("common-compound")

上官,欧阳,皇甫,司马,夏侯,诸葛,东方,尉迟,公孙,慕容,司徒,司空,令狐,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

王,李,张,刘,陈,杨,黄,赵,吴,周,徐,孙,马,朱,胡,郭,何,高,林,罗,郑,梁,谢,宋,唐,许,韩,冯,邓,曹,彭,曾,肖,田,董,袁,潘,于,蒋,蔡,余,杜,叶,程,魏,苏,吕,丁,任,沈,姚,卢,姜,崔,钟,谭,陆,汪,范,金,石,廖,贾,夏,韦,傅,方,白,邹,孟,熊,秦,邱,江,尹,薛,闫,段,雷,侯,龙,史,陶,黎,贺,顾,毛,郝,龚,邵,万,钱,严,汤,易,赖,乔,武,常,娄

## getAllSurname("common-single").length

100

## cnnamestr()

赵扬阳

## cnnamestr("彭")

彭萧菁

## cnnamestr(5)

郑利弘,马婷,郭韬,司空美维,贺佩茜

## cnnamestr("姚", 5)

姚钦,姚明,姚瑾伟,姚雨,姚妍

## cnnamestr({ count: 5 })

蔡灿冠,杨柯瑞,张晓,廖文琪,白贺

## cnnamestr({ count: 5, unique: true, givenNameDuplicated: true })

周皓皓,蒋珂珂,周燚燚,闫锋锋,苏玲玲

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

唐

## getSurname(5)

余,曾,曹,金,陆

## getSurname({ count: 5, surnameType: "common-compound", unique: true })

宇文,司马,皇甫,尉迟,上官

## getGivenName()

龙

## getGivenName(5)

强昆,毓,柳,慧勇,烈

## getGivenName({ count: 5, givenNameDuplicated: true, unique: true })

炎炎,锋锋,运运,利利,锐锐
