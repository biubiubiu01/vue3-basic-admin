<template>
    <div class="login-container all-container">
        <div class="h10" style="margin-bottom: 2%"></div>
        <div class="login-shadow">
            <el-row :gutter="10" class="h100">
                <el-col :xs="0" :sm="0" :md="0" :lg="12" :xl="12" class="flex-row-center login-flex-box">
                    <img src="../../assets/images/login/login-box.png" alt="" class="login-img" />
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="flex-center login-flex-box">
                    <div class="login-form">
                        <div class="login-title">{{ getSystemTitle }}</div>
                        <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
                            <el-form-item prop="username">
                                <base-input v-model="loginForm.username" placeholder="账号" @keyup.enter="goPassword" />
                            </el-form-item>
                            <el-form-item prop="password">
                                <base-input
                                    v-model="loginForm.password"
                                    ref="passwordRef"
                                    showPassword
                                    placeholder="密码"
                                    @keyup.enter="handleLogin"
                                />
                            </el-form-item>
                            <div class="flex-row-center justify-between">
                                <el-checkbox v-model="loginForm.remember" :true-label="1" :false-label="0">记住我</el-checkbox>
                                <span class="forget-password"> 忘记密码？</span>
                            </div>
                            <el-form-item class="mt20">
                                <base-button type="primary" size="large" class="w100" color="#4468f3" @click="handleLogin" :loading="loading">
                                    登 录
                                </base-button>
                            </el-form-item>
                            <div class="login-register mb15">还没有账号？立即<span class="register-title">注册</span></div>
                            <div class="login-divider">其他登录方式</div>
                            <div class="flex-row-center mt15 justify-around">
                                <base-icon svg-name="github" :size="25" class="pointer"></base-icon>
                                <base-icon svg-name="gitee" :size="25" class="pointer"></base-icon>
                                <base-icon svg-name="weixin" :size="25" class="pointer"></base-icon>
                                <base-icon svg-name="qq" :size="25" class="pointer"></base-icon>
                                <base-icon svg-name="zhifubao" :size="25" class="pointer"></base-icon>
                            </div>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMenuSetting } from "@/layouts/hooks/useMenuSetting";
import { useUserStoreWithOut } from "@/stores/modules/user";

const { getSystemTitle } = useMenuSetting();

const userStore = useUserStoreWithOut();

const router = useRouter();

const loginFormRef = ref();
const passwordRef = ref();
const loading = ref(false);

const loginForm = reactive({
    username: "admin",
    password: "123456",
    remember: 0
});

const loginRules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"]
        }
    ],
    password: [
        {
            required: true,
            message: "请输入密码",
            trigger: ["blur", "change"]
        }
    ]
};

const handleLogin = async () => {
    await unref(loginFormRef).validate(async (valid: boolean) => {
        if (!valid) return;
        try {
            loading.value = true;
            await userStore.login(loginForm);
            setTimeout(() => {
                router.push({
                    path: "/"
                });
            }, 100);
        } finally {
            loading.value = false;
        }
    });
};

const goPassword = () => {
    unref(passwordRef).instance.focus();
};
</script>

<style lang="scss" scoped>
$loginColor: #00000073;
$loginHigh: #4468f3;

.login-container {
    background: url("@/assets/images/login/background.png") no-repeat;
    background-size: 100% 100%;
    .login-shadow {
        max-width: 1350px;
        width: 80%;
        height: 70%;
        margin: 0 auto;
        background: url("@/assets/images/login/login-content.png") no-repeat;
        background-size: 100% 100%;
        padding: 0 6%;
        .login-flex-box {
            display: flex !important;
        }
        .login-img {
            width: 82%;
            height: auto;
        }

        .login-form {
            box-sizing: border-box;
            padding-left: 50px;
            .login-title {
                color: $loginHigh;
                font-size: 32px;
                font-weight: bold;
                text-align: center;
                margin-bottom: 45px;
            }
            .forget-password {
                color: $loginColor;
                font-size: var(--el-font-size-base);
            }
            .login-register {
                font-size: 12px;
                color: $loginColor;
                text-align: center;
                .register-title {
                    color: $loginHigh;
                    font-weight: bold;
                    margin-left: 5px;
                    cursor: pointer;
                }
            }
            .login-divider {
                color: $loginColor;
                font-size: 12px;
                text-align: center;
                position: relative;
                &::before {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    content: "";
                    height: 1px;
                    width: 37%;
                    background-color: var(--el-border-color);
                }
                &::after {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    content: "";
                    height: 1px;
                    width: 37%;
                    background-color: var(--el-border-color);
                }
            }
            :deep(.el-input__wrapper) {
                width: 360px;
            }
            :deep(.el-checkbox__label) {
                color: $loginColor;
            }
        }
    }
}

@media (max-width: 1200px) {
    .login-container {
        background: #293146;
        .login-shadow {
            background: transparent;
            .login-left-box {
                display: none !important;
            }
            .login-form {
                background-color: #fff;
                padding: 32px;
                border-radius: 6px;
            }
        }
    }
}
</style>
