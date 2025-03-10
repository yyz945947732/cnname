
# API Preview

## cnname()

罗园学

## cnname("彭")

彭泰

## cnname(5)

蒋悦东,刘瑶婉,孙禧纨,蓝谦娅,谭成

## cnname("姚", 5)

姚平,姚力,姚森,姚童,姚纯

## cnname({ count: 5 })

邓茜燕,郭洞,庄霜,贾桂哲,廉成裕

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

祝颖颖,卢珠珠,石洁洁,胡树树,赖贞贞

## cnname({ count: 5, surname: "张" })

张景,张茗,张芝禧,张俊,张旺

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张忠芳,张欢先,张韬岑,张艺骏,张娅娜

## cnname({ count: 5, unique: true, part: "surname" })

罗,方,高,闫,叶

## cnname({ count: 5, unique: true, part: "givenName" })

祺谦,娥,贵露,昭,廉

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

称行,阎雅,蒯凌,家娥,乌贵

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

欧阳珊,公西德,西门江,巫马幽,淳于均

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

胡青,马希,胡仪,马童,张晨

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

赵彦,单欣,田秋,马燕,戴安

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

东方霏,欧阳冠,上官纯,司空茗,令狐娣

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张哲超,张致卿,张顺伟,张风泽,张璋

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

董子

## cnnamestr("彭")

彭保

## cnnamestr(5)

陈学佳,余思育,吴树,郝羽舞,龚子

## cnnamestr("姚", 5)

姚冬墨,姚芳,姚倩,姚曲娥,姚翠舞

## cnnamestr({ count: 5 })

申波瑶,段冬仪,曾玉,金蕊,潘兴先

## cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })

裴义义,廉力力,孙榕榕,夏风风,傅淑淑

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
