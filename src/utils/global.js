/**
 * Global class to set auth info.
 */
export default class Global {
    accessToken = '';
    tokenType = '';
    expiresIn = 0;
    issuedAt = 0;
    scope = "USAGE_CONSUMPTION_ALL PRODUCT_SELECTOR_ALL";
    static setAuthInfo = ({access_token, token_type, expires_in, issued_at, scope}) => {
        this.accessToken = access_token;
        this.tokenType = token_type;
        this.expiresIn = expires_in;
        this.issuedAt = issued_at;
        this.scope = scope;
    };

    static getAuthInfo = () => {
        return {
            accessToken: this.accessToken,
            tokenType: this.tokenType,
            expiresIn: this.expiresIn,
            issuedAt: this.issuedAt,
            scope: this.scope
        };
    };
}
