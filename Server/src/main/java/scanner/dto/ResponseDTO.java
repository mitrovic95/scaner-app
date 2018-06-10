package scanner.dto;

public class ResponseDTO {
	public ResponseDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ResponseDTO(String code) {
		super();
		this.code = code;
	}

	String code;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
}
