
# API Preview

## cnname()

毛锻樱

## cnname("彭")

彭书深

## cnname(5)

邵甜宁,吴峥天,黎宇维,闫骏,刘瑶卫

## cnname("姚", 5)

姚衡绮,姚萱岱,姚星漪,姚焕妍,姚予鼎

## cnname({ count: 5 })

汪修,郑惠,沈语,崔亮,蒋焰

## cnname({ count: 5, unique: true, duplicatedGivenName: true })

何涵涵,施远远,宋彤彤,黄韵韵,何焕焕

## cnname({ count: 5, surname: "张" })

张运,张钜俊,张基,张杰伟,张昱

## cnname({ count: 5, surname: "张", givenNameLength: 2 })

张润书,张钜俐,张雯昀,张朗绣,张烁楠

## cnname({ count: 5, unique: true, part: "surname" })

郑,冯,蒋,杜,郝

## cnname({ count: 5, unique: true, part: "givenName" })

漪,璋,俪,灿,可晨

## cnname({ count: 5, unique: true, surnameType: "all-single", givenNameLength: 1 })

王璋,凌枫,娄骏,蓝元,昂鼎

## cnname({ count: 5, unique: true, surnameType: "all-compound", givenNameLength: 1 })

欧阳衡,梁丘宇,令狐涛,羊舌林,慕容美

## cnname({ count: 5, unique: true, surnameType: "common", givenNameLength: 1 })

江韵,邱克,邵展,于峥,彭芮

## cnname({ count: 5, unique: true, surnameType: "common-single", givenNameLength: 1 })

陈烈,黄韬,吴悠,钟阳,陆凯

## cnname({ count: 5, unique: true, surnameType: "common-compound", givenNameLength: 1 })

诸葛琪,上官露,轩辕娜,司空嫣,慕容劲

## cnname({ count: 5, unique: true,  surname: ["张", "李"] })

张荣,李钰昱,李渊,张健霖,张勋

## cnname({ count: 5, unique: true, givenNameType: "male" })

邹鼎全,贾旭富,欧阳宇,卢震全,徐野俊

## cnname({ count: 5, unique: true, givenNameType: "female" })

马彤,熊晨彩,李倩,秦梦,熊芮

## cnname({ count: 5, unique: true, givenNameType: "all" })

文倩榆,陆俊远,许书美,宿婷,房琦

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

蒲霏俊

## cnnamestr("彭")

彭展

## cnnamestr(5)

何乐芊,金轩,张芳,曹烽,梁佳境

## cnnamestr("姚", 5)

姚轩婷,姚全,姚奇翰,姚哲震,姚林

## cnnamestr({ count: 5 })

周勇,何智,关峻,孔悠,邹懿

## cnnamestr({ count: 5, unique: true, duplicatedGivenName: true })

屈柔柔,王泉泉,邓信信,应槿槿,佟皓皓

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
