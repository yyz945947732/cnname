
# API Preview

## cnname()

韩贤

## cnname("彭")

彭融筠

## cnname(5)

高琦谣,孙霞,熊力,周焕,萧翎

## cnname("姚", 5)

姚锦筠,姚祥,姚璋,姚利,姚风

## cnname({ count: 5 })

文龙词,崔绍,萧婷丽,徐勇,顾珍梦

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

侯克克,司空朝朝,张希希,佘妍妍,陆明明

## cnname({ count: 5, surname: "张" })

张芳,张琴凯,张娟,张勤,张心谐

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张歌彬,张仁若,张红琦,张水诚,张菁风

## cnname({ count: 5, unique: true, part: "surname" })

汪,范,陆,詹,胡

## cnname({ count: 5, unique: true, part: "givenName" })

琰书,家雷,利,才琼,眉

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

文忠,宁珊,咸春,干孝,陈冬

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

赫连爱,百里鹤,巫马晗,尉迟彦,公羊景

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

谢博,谢亮,段之,萧功,彭梅

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

邱飘,姚谐,丁霭,杜达,闫谦

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

东方凤,上官叶,东方彪,欧阳育,上官芸

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张骞风,张智,张力,李攀,张羽

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党,上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

167

## getAllSurname("compound-common")

上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("compound-common").length

18

## getAllSurname("single-common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党

## getAllSurname("single-common").length

149

## cnnamestr()

苏禄纯

## cnnamestr("彭")

彭山

## cnnamestr(5)

诸葛浩胜,萧宜竹,何莉致,廖坚,魏信盛

## cnnamestr("姚", 5)

姚朝,姚舞,姚娴竹,姚若娴,姚亚

## cnnamestr({ count: 5 })

蔡美悠,胡秋,欧阳莲婉,沈惠莎,郝景

## cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })

张娴娴,史蓉蓉,费颖颖,任娥娥,程天天

## parseName("张三")

{"surname":"张","givenName":"三"}

## parseName("笑三")

{"surname":"","givenName":"笑三"}

## parseName("三")

{"surname":"","givenName":"三"}

## parseName("")

{"surname":"","givenName":""}

## parseName("欧阳三")

{"surname":"欧阳","givenName":"三"}
