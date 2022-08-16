<style lang="scss" scoped>
.network_dialog_body {
  font-family: 'Montserrat';
  font-size: 12pt;
}

.step-title {
  font-family: 'Montserrat';
  font-size: 14pt;
  text-align: left;
  color: #2c2d2f;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.step-body {
  font-family: 'Montserrat';
  font-size: 12pt;
  text-align: center;
  color: #2c2d2f;
  padding-left: 10%;
  padding-right: 10%;
}

.step-img {
  margin-left: -2%;
  display: inline-block;
  vertical-align: middle;
}
</style>

<template>
  <el-dialog
    title="Complete the process"
    footer
    append-to-body
    custom-class="network_dialog"
    :close-on-click-modal="false"
    :visible.sync="DialogInfo.DialogVisible"
    @close="closeDialog"
  >
    <div class="network_dialog_body">
      <p>
        Please do not close the pop-up windows until you finish the whole
        transaction
      </p>
      <br />
    </div>
    <div class="dialog-table">
      <el-table
        :data="DialogInfo.StepsInfo"
        style="width: 100%"
        :show-header="false"
        row-key="step"
        :expand-row-keys="[DialogInfo.Step]"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <div class="step-body" style="word-break: break-word">
              <br /><br />
              {{ props.row.detail }}
              <br /><br />
            </div>
          </template>
        </el-table-column>
        <el-table-column label="intro" prop="intro">
          <template slot-scope="props">
            <div class="step-img">
              <img
                :src="DialogInfo.ImgOptions[DialogInfo.Step][props.row.step]"
                width="54"
              />
            </div>
            <div class="step-title">{{ props.row.intro }} <br /></div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
</template>

<script>
import {
  closeDialog,
} from '../../config/loading_info';
export default {
  props: ['DialogInfo'],

  data() {
    return {};
  },
  methods: {
    closeDialog() {
      closeDialog(this.DialogInfo);
    },
  },
};
</script>


