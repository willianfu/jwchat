<template>
	<div class="cp-contact">
		<group :contacts="contacts" class="group"></group>
		<group-view></group-view>
	</div>
</template>

<script>
    import group from "./group";
    import groupView from './group-view'

    export default {
        name: "contact",
        components: {group, groupView},
        data() {
            return {
                fixContacts: [
                    {title: '新的朋友', list: [{img: require('../../../assets/group/newFriends.png'), name: '新的朋友'}]},
                    {title: '订阅号', list: [{img: require('../../../assets/group/dyh.png'), name: '订阅号'}]},
                ],
                contacts: [],
                test: [
                    {
                        title: '群聊',
                        list: [
                            {img: require('../../../assets/group/img2.png'), name: '嗦泡大队'},
                            {img: require('../../../assets/group/img2.png'), name: 'bugStack虫洞栈'},
                            {img: require('../../../assets/group/img2.png'), name: '相亲相爱一家人'},
                        ]
                    },
                    {
                        title: 'N',
	                    list: [
	                        {img: require('../../../assets/group/mv1.jpg'), name: '妮妮'},
                            {img: require('../../../assets/group/mv3.jpg'), name: '娜娜'}
	                    ]
                    },{
                        title: 'W',
                        list: [
                            {img: require('../../../assets/group/mv2.jpg'), name: '婉婉'},
                            {img: require('../../../assets/group/ayi1.jpg'), name: '王阿姨'}
                        ]
                    },

                ]
            }
        },
        mounted() {
            this.contacts.push(this.fixContacts[0], this.fixContacts[1])
	        this.test.forEach(t => this.contacts.push(t))
        }
    }
</script>

<style scoped lang="less">
	.cp-contact {
		height: calc(100% - 64px);
		
		.group {
			overflow-y: auto;
		}
	}
</style>
