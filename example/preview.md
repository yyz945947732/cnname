
# API Preview

## cnname()

闪鹏凝

## cnname("彭")

彭琴

## cnname(5)

拓跋亮泉,法钧纯,仵诗旭,斐河,强舒

## cnname("姚", 5)

姚昌娥,姚克丰,姚朗绮,姚珊峰,姚烁巧

## cnname({ count: 5 })

瑞信孝,卫琼俭,茆会彬,狂妍峰,纵翊文

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

侍壮壮,撒骏骏,纳姬姬,无歌歌,示辰辰

## cnname({ count: 5, surname: "张" })

张之,张园惠,张奋有,张岩义,张保

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张荔承,张姬绍,张仪毅,张岩峰,张毓豪

## cnname({ count: 5, unique: true, part: "surname" })

刀,勾,叶,褒,洛

## cnname({ count: 5, unique: true, part: "givenName" })

红舞,攀,建,淑弘,丹

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

潘月,五忠,秘融,阿悦,种淑

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

轩辕园,亓官莺,呼延海,南门昭,司徒滢

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

孙绍,谢平,伍琳,薛羽,江翎

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

郑丰,钟城,彭裕,程川,黄福

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

诸葛谣,长孙川,上官峰,令狐淑,慕容轮

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张娟,张俭轩,李星,李壮琰,张香梦

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,漕,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,杜,刘,聂,司,伍,柯,樊,章,许,童,费,卢,皮,卫,倪,严,沈,宿,翁,秦,甄,申,扶,宗,应,祝,冀,乔,盖,车,须,丰,巢,关,蒲,邸,符,冉,柏,佟,练,蒙,幸,牛,寇,乔,充,佘,瞿,甘,厉,莫,经,房,裴,陆,荣,翟,詹,湛,赵,公,仇,迟,米,贝,明,伏,成,程,宣,佴,井,车,逄,斐,廉,岑,褚,阮,蓝,雷,丘,闻,易,皮,庞,公,季,计,谷,党,谈,宿,尚,童,盖,祖,居,上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("compound-common")

上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("single-common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,漕,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,杜,刘,聂,司,伍,柯,樊,章,许,童,费,卢,皮,卫,倪,严,沈,宿,翁,秦,甄,申,扶,宗,应,祝,冀,乔,盖,车,须,丰,巢,关,蒲,邸,符,冉,柏,佟,练,蒙,幸,牛,寇,乔,充,佘,瞿,甘,厉,莫,经,房,裴,陆,荣,翟,詹,湛,赵,公,仇,迟,米,贝,明,伏,成,程,宣,佴,井,车,逄,斐,廉,岑,褚,阮,蓝,雷,丘,闻,易,皮,庞,公,季,计,谷,党,谈,宿,尚,童,盖,祖,居

## cnnamestr()

邝泽

## cnnamestr("彭")

彭冬东

## cnnamestr(5)

厚昭,黎琬谣,关才,本祺,达坚

## cnnamestr("姚", 5)

姚歌,姚慧,姚慧,姚楠勇,姚欢晔

## cnnamestr({ count: 5 })

咸波,依舞彬,环枝晗,米珠寒,舒璋盛

## cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })

苏飘飘,端雪雪,鱼生生,忻建建,轩辕茗茗
