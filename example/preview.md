
# API Preview

## cnname()

段芝伯

## cnname("彭")

彭谦

## cnname(5)

卢鹤新,苏善,司徒姬震,王裕章,武爱茜

## cnname("姚", 5)

姚瑗,姚燕婕,姚巧飞,姚菲,姚馥卓

## cnname({ count: 5 })

谢雯,司环,方静,石茗霜,郭寒

## cnname({ count: 5, unique: true, duplicatedGivenNameOnly: true })

袁健健,史晶晶,顾超超,段水水,唐跃跃

## cnname({ count: 5, surname: "张" })

张晴,张聪,张淑水,张雁咏,张洞

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张丰扬,张知智,张彪行,张鸿莺,张虹晨

## cnname({ count: 5, unique: true, part: "surname" })

成,严,闫,袁,武

## cnname({ count: 5, unique: true, part: "givenName" })

雄承,纯民,扬,谣,朝

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

贲旭,夔韵,司曲,冀融,阴昌

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

仲孙树,公西致,百里夏,轩辕磊,皇甫菲

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

蔡春,汤青,金飞,尹露,田浩

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

李轮,史烁,彭先,范邦,尹奇

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

司徒梁,夏侯固,司空榕,公孙霄,慕容敬

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张仪月,李跃恒,张嘉,李怡,张玲蓓

## isSurname("张")

true

## isSurname("笑")

false

## getAllSurname("common")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党,上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common").length

167

## getAllSurname("common-compound")

上官,欧阳,司马,夏侯,诸葛,东方,尉迟,司徒,司空,令狐,公孙,慕容,长孙,轩辕,宇文,太叔,澹台,南宫

## getAllSurname("common-compound").length

18

## getAllSurname("common-single")

李,王,张,刘,陈,杨,赵,黄,周,吴,徐,孙,胡,朱,高,林,何,郭,马,罗,梁,宋,郑,谢,韩,唐,冯,于,董,萧,程,曹,袁,邓,许,傅,沈,曾,彭,吕,苏,卢,蒋,蔡,贾,丁,魏,薛,叶,闫,余,潘,杜,戴,夏,钟,汪,田,任,姜,范,方,石,姚,谭,廖,邹,熊,金,陆,郝,孔,白,崔,康,毛,邱,秦,江,史,顾,侯,邵,孟,龙,万,段,钱,汤,尹,黎,易,常,武,乔,贺,赖,龚,文,庄,单,欧,施,屈,祝,聂,司,伍,柯,樊,章,童,费,卫,倪,严,宿,翁,甄,申,应,车,巢,关,蒲,符,柏,佟,蒙,牛,佘,瞿,甘,莫,房,裴,翟,詹,明,成,廉,岑,阮,蓝,雷,丘,闻,庞,党

## getAllSurname("common-single").length

149

## cnnamestr()

郭国

## cnnamestr("彭")

彭琴

## cnnamestr(5)

严闻,孔书,江昌贵,祝超,聂卓

## cnnamestr("姚", 5)

姚丽眉,姚绮,姚兰龙,姚欣,姚虹毓

## cnnamestr({ count: 5 })

毛晓晔,刘嘉,杜冰,尹强晖,关凯

## cnnamestr({ count: 5, unique: true, duplicatedGivenNameOnly: true })

石飘飘,田裕裕,冯家家,段谐谐,金兰兰

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
