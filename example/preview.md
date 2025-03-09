
# API Preview

## cnname()

易翊丹

## cnname("彭")

彭城

## cnname(5)

烟清豪,登亮月,勾学夏,墨菲,厍钧全

## cnname("姚", 5)

姚学希,姚启裕,姚厚攀,姚林厚,姚黛

## cnname({ count: 5 })

养岑,抄昌红,保澜昌,隗洁,华裕兴

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

邱轩轩,项珊珊,硕顺顺,英仪仪,门琴琴

## cnname({ count: 5, surname: "张" })

张宁,张静峰,张忠,张璋,张雅

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张香婉,张芬晗,张森轮,张忠淑,张晨幽

## cnname({ count: 5, unique: true, part: "surname" })

寇,汗,何,毓,郁

## cnname({ count: 5, unique: true, part: "givenName" })

致茗,超子,光倩,燕成,德莎

## cnname({ count: 5, unique: true, surnameType: "single", givenNameLength: 1 })

其融,南义,南松,邰静,理娜

## cnname({ count: 5, unique: true, surnameType: "compound", givenNameLength: 1 })

慕容士,澹台士,拓跋绮,欧阳天,东郭洞

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

倪杰,夏侯璧,皮曦,杜枫,钟瀚

## cnname({ count: 5, unique: true, surnameType: "single-common", givenNameLength: 1 })

黎福,邱电,柯才,范固,莫雪

## cnname({ count: 5, unique: true, surnameType: "compound-common", givenNameLength: 1 })

夏侯素,南宫婕,长孙亨,轩辕瀚,公孙婕

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

李杰耀,李勤娅,李絮,张婉,张露

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,漕,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,聂,司,伍,柯,樊,章,童,费,皮,卫,倪,严,宿,翁,甄,申,扶,宗,应,冀,盖,车,须,丰,巢,关,蒲,邸,符,冉,柏,佟,练,蒙,幸,牛,寇,充,佘,瞿,甘,厉,莫,经,房,裴,荣,翟,詹,湛,公,仇,迟,米,贝,明,伏,成,宣,佴,井,逄,斐,廉,岑,褚,阮,蓝,雷,丘,闻,庞,季,计,谷,党,谈,尚,祖,居,上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("common").length

210

## getAllSurname("compound-common")

上官,欧阳,司马,夏侯,诸葛,东方,皇甫,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,闾丘,太叔,申屠,公冶,澹台,公良,南宫

## getAllSurname("compound-common").length

23

## getAllSurname("single-common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,漕,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,奚,施,屈,祝,聂,司,伍,柯,樊,章,童,费,皮,卫,倪,严,宿,翁,甄,申,扶,宗,应,冀,盖,车,须,丰,巢,关,蒲,邸,符,冉,柏,佟,练,蒙,幸,牛,寇,充,佘,瞿,甘,厉,莫,经,房,裴,荣,翟,詹,湛,公,仇,迟,米,贝,明,伏,成,宣,佴,井,逄,斐,廉,岑,褚,阮,蓝,雷,丘,闻,庞,季,计,谷,党,谈,尚,祖,居

## getAllSurname("single-common").length

187

## cnnamestr()

咎枫

## cnnamestr("彭")

彭卿

## cnnamestr(5)

廖枫,宋吉雪,杭启,但羽,毋娴林

## cnnamestr("姚", 5)

姚晶子,姚雯,姚楠腾,姚昌茗,姚志

## cnnamestr({ count: 5 })

慕容棋霏,戈海,衡香,昂融,展福

## cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })

陀生生,郯闻闻,喻震震,弭博博,公良媛媛

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
