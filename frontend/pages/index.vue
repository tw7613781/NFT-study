<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <p>hello</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import getBlockchain from '../utils/ethereum'

export default {
  data() {
    return {
      nft: undefined,
    }
  },
  async created() {
    try {
      const { nft } = await getBlockchain()
      const tokenURI = await nft.tokenURI(0)
      console.log(`got NFT uri from Chain: ${tokenURI}`)
      const { data } = await this.$axios.get(tokenURI)
      console.log(`retrieved NFT details info: ${JSON.stringify(data)}`)
      this.nft = data.result
    } catch (err) {
      console.log(err)
    }
  },
}
</script>
